const portfolioContext = require('./portfolio-data');

const MODEL_NAME = "gemini-3.5-flash-lite";

const systemPrompt = `
You are Aleyna's virtual AI assistant. Your goal is to help visitors who browse Aleyna Karaağaç's portfolio website.
Answer their questions about Aleyna's background, education, technical skills, projects, and work experience.

Here is the details of Aleyna's profile:
${portfolioContext}

Personality & Guidelines:
1. Always be polite, helpful, and professional.
2. Answer in the same language the visitor uses (Turkish or English). If they ask in Turkish, answer in Turkish. If they ask in English, answer in English.
3. Keep your answers brief, engaging, and easy to read. Use bullet points for lists.
4. Do NOT hallucinate or make up details that are not in the portfolio context. If a visitor asks about something not mentioned in the context (like personal opinions, unrelated topics, or specific details not present), politely state that you do not know or suggest they contact Aleyna directly via her email (aleynakaraagac046@gmail.com).
5. If the visitor asks to write code, do not write large blocks of code unless it specifically relates to demonstrating her projects.
`;

const rateLimitMap = new Map();

function isRateLimited(ip) {
    const now = Date.now();
    const limitWindow = 60 * 1000; // 1 minute
    const maxRequests = 10; // max 10 requests per minute

    const clientData = rateLimitMap.get(ip);
    if (!clientData) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
        return false;
    }

    if (now - clientData.lastReset > limitWindow) {
        clientData.count = 1;
        clientData.lastReset = now;
        return false;
    }

    if (clientData.count >= maxRequests) {
        return true;
    }

    clientData.count++;
    return false;
}

module.exports = async (req, res) => {
    // 1. CORS Headers
    const origin = req.headers.origin;
    const allowedOrigins = [
        "https://aleyna134.github.io",
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:5500",
        "http://localhost:5501",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5500",
        "http://127.0.0.1:5501"
    ];

    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Preflight check
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    // 2. Rate Limiting
    const ip = req.headers['x-forwarded-for'] || (req.socket && req.socket.remoteAddress) || '127.0.0.1';
    if (isRateLimited(ip)) {
        return res.status(429).json({ error: "Too many requests. Please try again in a minute." });
    }

    // 3. Validation
    const { message, history } = req.body || {};
    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: "Message is required and must be a string." });
    }

    if (message.length > 1000) {
        return res.status(400).json({ error: "Message is too long. Maximum 1000 characters." });
    }

    if (history && !Array.isArray(history)) {
        return res.status(400).json({ error: "History must be an array." });
    }

    // 4. API Key Check
    const apiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : null;
    if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is not configured on the server." });
    }

    try {
        // Map history to Gemini format
        // Keep only last 10 messages from history to respect context limits
        const chatHistory = history || [];
        const recentHistory = chatHistory.slice(-10);
        const contents = recentHistory.map(item => ({
            role: item.role === 'assistant' || item.role === 'bot' ? 'model' : 'user',
            parts: [{ text: item.text }]
        }));

        // Add the current message
        contents.push({
            role: "user",
            parts: [{ text: message }]
        });

        // Call Gemini API
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${apiKey}`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents,
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                }
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            console.error("Gemini API Error:", errData);
            return res.status(response.status).json({ error: "Failed to communicate with Gemini API.", details: errData });
        }

        const data = await response.json();
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (!responseText) {
            return res.status(500).json({ error: "No response text received from Gemini API." });
        }

        return res.status(200).json({ response: responseText });
    } catch (error) {
        console.error("Chat Server Error:", error);
        return res.status(500).json({ error: "Internal server error." });
    }
};
