const http = require('http');
const fs = require('fs');
const path = require('path');
const handler = require('./api/chat.js');

// Load local .env file
try {
    const envPath = path.join(__dirname, '.env');
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
        const parts = line.split('=');
        if (parts[0] && parts[0].trim() === 'GEMINI_API_KEY') {
            process.env.GEMINI_API_KEY = parts.slice(1).join('=').trim();
        }
    });
} catch (e) {
    console.log("Notice: Could not read local .env file.");
}

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Add Vercel-compatible res.status and res.json helpers
    res.status = function(code) {
        this.statusCode = code;
        return this;
    };
    res.json = function(data) {
        this.setHeader('Content-Type', 'application/json');
        this.end(JSON.stringify(data));
    };

    // Body parser for JSON requests
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
        try {
            req.body = body ? JSON.parse(body) : {};
        } catch (e) {
            req.body = {};
        }
        handler(req, res);
    });
});

server.listen(PORT, () => {
    console.log(`Local Chatbot API Server running at http://localhost:${PORT}/api/chat`);
});
