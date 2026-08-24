const translations = {
    tr: {
        nav_about: "Hakkımda",
        nav_skills: "Yetenekler",
        nav_projects: "Projeler",
        nav_experience: "Deneyim & Eğitim",
        nav_contact: "İletişim",
        hero_greeting: "Merhaba, ben",
        hero_name: "ALEYNA KARAAĞAÇ",
        hero_title: "Gazi Üniversitesi • Bilgisayar Mühendisliği",
        hero_tagline: "Web ve mobil platformlarda yüksek performanslı sistemler ve yenilikçi yapay zekâ çözümleri geliştiriyorum.",
        hero_cta: "Projelerimi Gör",
        about_title: "Hakkımda",
        about_text: "Backend sistemler, otomasyon teknolojileri ve yapay zekâ destekli web/mobil uygulamalar üzerine çalışan dördüncü sınıf bilgisayar mühendisliği öğrencisiyim. Takım projelerinde aktif rol alarak güvenli, ölçeklenebilir ve kullanıcı odaklı yazılım çözümleri geliştirmeye odaklanıyorum.",
        skills_title: "Teknik Yetenekler",
        skill_lang: "Diller",
        skill_backend: "Backend & API",
        skill_frontend: "Frontend & Mobile",
        skill_db: "Veritabanı & Messaging",
        skill_ai: "AI/ML & Veri Bilimi",
        skill_devops: "DevOps & Araçlar",
        projects_title: "Projeler",
        proj_drivermind_title: "DriverMind AI – Real-Time Driver Behaviour Risk Prediction",
        proj_drivermind_date: "Temmuz 2026",
        proj_drivermind_desc: "UAH-DriveSet çoklu sensör verileri (GPS, ivmeölçer, şerit takibi vs.) kullanarak sürücü davranışını (Normal / Drowsy / Aggressive) sınıflandıran LSTM tabanlı bir derin öğrenme modeli geliştirerek gerçek zamanlı risk analiz dashboard'u oluşturdum. Ayrıca ResNet50 ve Optical Flow tabanlı görüntü işleme yaklaşımlarını değerlendirdim.",
        proj_forensic_title: "ForensicChain – Digital Evidence Integrity Platform",
        proj_forensic_date: "Haziran 2026",
        proj_forensic_desc: "Dijital delillerin bütünlüğünü doğrulamak ve chain-of-custody süreçlerini yönetmek için mikroservis tabanlı bir adli bilişim platformu geliştirildi. Evidence ingestion, hash verification ve immutable ledger akışlarının geliştirilmesinde görev aldım.",
        proj_ci_title: "CI Automation System",
        proj_ci_date: "Mayıs 2026",
        proj_ci_desc: "GitHub repository'lerindeki kod değişikliklerini otomatik algılayarak build, test ve pipeline süreçlerini yöneten bir CI otomasyon sistemi geliştirildi. Runner modülünün step execution ve log toplama mekanizmaları kısımlarında görev aldım.",
        proj1_title: "PromptGuard – LLM Security Gateway",
        proj1_date: "Nisan 2026",
        proj1_desc: "LLM tabanlı sistemlerde kişisel veri sızıntısı ve etik ihlalleri önlemek amacıyla PII detection, ethics analysis ve decision engine modüllerinden oluşan çok katmanlı bir güvenlik gateway geliştirildi. Ethics analysis ve decision engine kısımlarında görev aldım.",
        proj2_title: "Trafik Kazası Risk Tahmini",
        proj2_date: "Ocak 2026",
        proj2_desc: "Trafik kazası verileri (200k+ kayıt) üzerinde veri ön işleme, feature engineering ve makine öğrenmesi teknikleri kullanarak kaza şiddeti tahmini yapan bir model geliştirildi ve sonuçları kullanıcıya sunan bir analiz dashboard'u oluşturuldu.",
        proj3_title: "Kariyer Portalı",
        proj3_date: "Ağustos 2025",
        proj3_desc: "Rol tabanlı kullanıcı yönetimi (Admin/İşveren/Aday), iş ilanı oluşturma ve başvuru sistemi, CV yönetimi ve profil oluşturma özelliklerini içeren bir web uygulaması geliştirdim.",
        proj4_title: "Sunum Koçu AI",
        proj4_date: "Haziran 2025",
        proj4_desc: "Yapay zekâ destekli bir sunum analiz platformu geliştirerek video ve ses verileri üzerinden beden dili, göz teması, ses tonu ve konuşma akıcılığı analizleri gerçekleştiren bir web uygulaması tasarladım.",
        proj5_title: "Gazi Kampüs",
        proj5_date: "Nisan 2024",
        proj5_desc: "Öğrencilerin üniversite hayatları boyunca onlara yardımcı olabilecek mobil uygulama geliştirildi.",
        exp_edu_title: "Deneyim & Eğitim",
        exp_title: "Deneyim & Gönüllü Çalışmalar",
        edu_title: "Eğitim",
        exp1_title: "Yazılım Geliştirici Stajyeri",
        exp1_company: "May Cyber Technology | Ankara",
        exp1_date: "Temmuz 2025 – Ağustos 2025",
        exp1_desc: "ODTÜ Teknokent'te yapmış olduğum bu stajda kullanıcı yönetimi, iş başvuru ilişkileri ve yönetici paneli modülleri geliştirdim.",
        edu1_title: "Bilgisayar Mühendisliği (Lisans)",
        edu1_company: "Gazi Üniversitesi",
        edu1_date: "2022 – Günümüz",
        edu1_desc: "AGNO: 3.40",
        exp2_title: "Sponsorluk Başkanı",
        exp2_company: "ACM Gazi Öğrenci Kulübü | Ankara",
        exp2_date: "Kasım 2024 – Eylül 2025",
        exp2_desc: "Kurumsal iletişim ve organizasyon süreçlerinde aktif rol aldım.",
        exp3_title: "Tanıtım & Halkla İlişkiler Üyesi",
        exp3_company: "Herkes İçin Havacılık Derneği",
        exp3_date: "Kasım 2024 – Mayıs 2025",
        exp3_desc: "Afiş ve video tasarımı ile reklamcılık alanlarında çalıştım. Kuruluşların görünürlüğünü artırmak için yaratıcı içerikler ürettim.",
        edu2_title: "Lise Eğitimi",
        edu2_company: "Şehit Oğuzhan Yaşar Anadolu Lisesi",
        edu2_date: "2017 – 2020",
        edu2_desc: "Diploma Notu: 95.4",
        nav_languages: "Yabancı Diller",
        languages_title: "Yabancı Diller & Sınavlar",
        lang_english: "İngilizce",
        lang_english_level: "B2 Upper-Intermediate",
        lang_english_desc: "Akıcı okuma, yazma ve mesleki iletişim yetkinliği",
        lang_yokdil: "YÖKDİL Fen Bilimleri",
        lang_yokdil_score: "Puan: 78,75",
        lang_yokdil_desc: "Akademik & Teknik İngilizce Yeterlilik Sınavı",
        contact_title: "İletişim",
        contact_text: "Benimle iletişime geçmek için aşağıdaki bağlantıları kullanabilirsiniz.",
        proj_github: "GitHub'da Gör",
        footer_text: "Tüm hakları saklıdır.",
        chat_title: "Astra",
        chat_status: "Çevrimiçi",
        chat_placeholder: "Bir şeyler yazın...",
        chat_suggest_1: "Projelerin neler?",
        chat_suggest_2: "Yeteneklerin neler?",
        chat_suggest_3: "İletişim bilgileri?",
        chat_error: "Bağlantı hatası oluştu. Lütfen tekrar deneyin.",
        chat_limit_error: "Mesajınız 1000 karakterden uzun olamaz.",
        chat_welcome: "Merhaba! Ben Astra, Aleyna'nın yapay zekâ asistanıyım. Aleyna'nın projeleri, eğitimi veya yetenekleri hakkında merak ettiklerinizi bana sorabilirsiniz.",
        chat_button_label: "Bana soru sor!"
    },
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_experience: "Experience & Education",
        nav_languages: "Languages",
        nav_contact: "Contact",
        hero_greeting: "Hello, I am",
        hero_name: "ALEYNA KARAAĞAÇ",
        hero_title: "Gazi University • Computer Engineering",
        hero_tagline: "Developing high-performance systems and innovative AI solutions across web and mobile platforms.",
        hero_cta: "View My Work",
        about_title: "About Me",
        about_text: "I am a fourth-year computer engineering student specializing in backend systems, automation technologies, and AI-powered web/mobile applications. I focus on developing secure, scalable, and user-centric software solutions by taking active roles in team projects.",
        skills_title: "Technical Skills",
        skill_lang: "Languages",
        skill_backend: "Backend & API",
        skill_frontend: "Frontend & Mobile",
        skill_db: "Database & Messaging",
        skill_ai: "AI/ML & Data Science",
        skill_devops: "DevOps & Tools",
        projects_title: "Projects",
        proj_drivermind_title: "DriverMind AI – Real-Time Driver Behaviour Risk Prediction",
        proj_drivermind_date: "July 2026",
        proj_drivermind_desc: "Developed an LSTM-based deep learning model to classify driver behavior (Normal / Drowsy / Aggressive) using UAH-DriveSet multi-sensor data (GPS, accelerometer, lane tracking, etc.) and created a real-time risk analysis dashboard. Evaluated ResNet50 and Optical Flow-based image processing approaches.",
        proj_forensic_title: "ForensicChain – Digital Evidence Integrity Platform",
        proj_forensic_date: "June 2026",
        proj_forensic_desc: "Developed a microservice-based digital forensics platform to verify the integrity of digital evidence and manage chain-of-custody processes. Contributed to the development of evidence ingestion, hash verification, and immutable ledger pipelines.",
        proj_ci_title: "CI Automation System",
        proj_ci_date: "May 2026",
        proj_ci_desc: "Developed a CI automation system that automatically detects code changes in GitHub repositories and manages build, test, and pipeline processes. Contributed to the runner module's step execution and log collection mechanisms.",
        proj1_title: "PromptGuard – LLM Security Gateway",
        proj1_date: "April 2026",
        proj1_desc: "Developed a multi-layered security gateway consisting of PII detection, ethics analysis, and decision engine modules to prevent personal data leaks and ethical violations in LLM-based systems. Contributed to the ethics analysis and decision engine components.",
        proj2_title: "Traffic Accident Risk Prediction",
        proj2_date: "January 2026",
        proj2_desc: "Developed a model predicting accident severity using data preprocessing, feature engineering, and ML techniques on traffic accident data (200k+ records), and created an analysis dashboard to present findings to users.",
        proj3_title: "Career Portal",
        proj3_date: "August 2025",
        proj3_desc: "Developed a web application featuring role-based user management (Admin/Employer/Candidate), job posting and application systems, CV management, and profile creation capabilities.",
        proj4_title: "Presentation Coach AI",
        proj4_date: "June 2025",
        proj4_desc: "Designed an AI-supported presentation analysis web application that analyzes body language, eye contact, tone of voice, and speech fluency through video and audio data.",
        proj5_title: "Gazi Campus",
        proj5_date: "April 2024",
        proj5_desc: "Developed a mobile application to assist students throughout their university lives.",
        exp_edu_title: "Experience & Education",
        exp_title: "Experience & Volunteer Work",
        edu_title: "Education",
        exp1_title: "Software Developer Intern",
        exp1_company: "May Cyber Technology | Ankara, Turkey",
        exp1_date: "July 2025 – August 2025",
        exp1_desc: "Developed user management, job application relations, and admin panel modules during this internship at ODTÜ Teknokent.",
        edu1_title: "Computer Engineering (BSc)",
        edu1_company: "Gazi University",
        edu1_date: "2022 – Present",
        edu1_desc: "GPA: 3.40",
        exp2_title: "Head of Sponsorship",
        exp2_company: "ACM Gazi Student Chapter | Ankara, Turkey",
        exp2_date: "November 2024 – September 2025",
        exp2_desc: "Took an active role in corporate communication and organization processes.",
        exp3_title: "PR & Promotion Member",
        exp3_company: "Herkes İçin Havacılık Derneği",
        exp3_date: "November 2024 – May 2025",
        exp3_desc: "Worked in advertising with poster and video design. Produced creative content to increase the visibility of organizations.",
        edu2_title: "High School Education",
        edu2_company: "Şehit Oğuzhan Yaşar Anadolu Lisesi",
        edu2_date: "2017 – 2020",
        edu2_desc: "Graduation Grade: 95.4",
        languages_title: "Languages & Exams",
        lang_english: "English",
        lang_english_level: "B2 Upper-Intermediate",
        lang_english_desc: "Fluent reading, writing, and professional communication",
        lang_yokdil: "YÖKDİL Science & Engineering",
        lang_yokdil_score: "Score: 78.75",
        lang_yokdil_desc: "Academic & Technical English Proficiency Exam",
        contact_title: "Contact",
        contact_text: "You can use the links below to get in touch with me.",
        proj_github: "View on GitHub",
        footer_text: "All rights reserved.",
        chat_title: "Astra",
        chat_status: "Online",
        chat_placeholder: "Type a message...",
        chat_suggest_1: "What are your projects?",
        chat_suggest_2: "What are your skills?",
        chat_suggest_3: "Contact details?",
        chat_error: "A connection error occurred. Please try again.",
        chat_limit_error: "Your message cannot exceed 1000 characters.",
        chat_welcome: "Hello! I am Astra, Aleyna's AI assistant. Feel free to ask me anything about Aleyna's projects, education, or skills.",
        chat_button_label: "Ask me anything!"
    }
};

document.addEventListener('DOMContentLoaded', () => {



    
    // --- Typewriter Animation Logic ---
    let typewriterTimeout;
    function typeWriter(element, text, speed = 25) {
        clearTimeout(typewriterTimeout);
        element.textContent = "";
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                typewriterTimeout = setTimeout(type, speed);
            }
        }
        type();
    }

    // --- Language Switcher ---
    const btnTr = document.getElementById('lang-tr');
    const btnEn = document.getElementById('lang-en');
    let currentLang = 'tr';
    
    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (key === 'hero_tagline') {
                    typeWriter(el, translations[lang][key], 25);
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        
        // Update chatbot placeholders & suggestions
        const chatInputEl = document.getElementById('chat-input');
        if (chatInputEl) {
            chatInputEl.placeholder = translations[lang].chat_placeholder;
        }
        renderSuggestions();
        
        if (lang === 'tr') {
            btnTr.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnTr.classList.remove('active');
        }
    }



    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Intersection Observer for Fade-In Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // --- Canvas Particle Background ---
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: null, y: null };

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        }

        function initParticles() {
            particles = [];
            const numParticles = Math.min(Math.floor(width * height / 15000), 100);
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5 + 0.5,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    color: Math.random() > 0.5 ? 'rgba(0, 243, 255, 0.5)' : 'rgba(188, 19, 254, 0.5)'
                });
            }
        }

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);
            
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                
                // Update position
                p.x += p.vx;
                p.y += p.vy;
                
                // Wrap around edges
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                
                // Draw connecting lines
                for (let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - dist/1500})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
                
                // Mouse interaction
                if (mouse.x != null && mouse.y != null) {
                    let dxMouse = p.x - mouse.x;
                    let dyMouse = p.y - mouse.y;
                    let distMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
                    
                    if (distMouse < 200) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 243, 255, ${0.15 - distMouse/1500})`;
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                        
                        // Subtle repel effect
                        p.x += dxMouse * 0.01;
                        p.y += dyMouse * 0.01;
                    }
                }
            }
            
            requestAnimationFrame(drawParticles);
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawParticles();
    }

    const CHAT_API_URL = (window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
        ? 'http://localhost:3000/api/chat'
        : 'https://portfolio-website-vert-three-23.vercel.app/api/chat';

    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatSuggestions = document.getElementById('chat-suggestions');

    let chatHistory = [];
    let welcomeSent = false;

    function escapeHTML(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function parseMarkdown(text) {
        let safeText = escapeHTML(text);

        // Convert Markdown links: [text](url)
        safeText = safeText.replace(/\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-inline-link">$1 <i class="fas fa-external-link-alt"></i></a>');

        // Convert standalone URLs: https://...
        safeText = safeText.replace(/(^|[^"])((https?:\/\/[^\s<]+))/g, function(match, prefix, url) {
            if (prefix.endsWith('=')) return match;
            return `${prefix}<a href="${url}" target="_blank" rel="noopener noreferrer" class="chat-inline-link">${url} <i class="fas fa-external-link-alt"></i></a>`;
        });

        // Bold formatting: **text** -> <strong>text</strong>
        safeText = safeText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // Lists: - item or * item
        const lines = safeText.split('\n');
        let inList = false;
        let html = '';

        for (let line of lines) {
            const listMatch = line.match(/^(\s*)[-*]\s+(.*)$/);
            if (listMatch) {
                if (!inList) {
                    html += '<ul>';
                    inList = true;
                }
                html += `<li>${listMatch[2]}</li>`;
            } else {
                if (inList) {
                    html += '</ul>';
                    inList = false;
                }
                if (line.trim() !== '') {
                    html += `<p>${line}</p>`;
                }
            }
        }
        if (inList) {
            html += '</ul>';
        }
        return html;
    }

    function sendWelcomeMessage() {
        if (welcomeSent) return;
        appendMessage('bot', translations[currentLang].chat_welcome);
        welcomeSent = true;
    }

    function renderSuggestions() {
        if (!chatSuggestions) return;
        chatSuggestions.innerHTML = '';
        const suggests = [
            translations[currentLang].chat_suggest_1,
            translations[currentLang].chat_suggest_2,
            translations[currentLang].chat_suggest_3
        ];
        suggests.forEach(text => {
            const btn = document.createElement('button');
            btn.className = 'chat-suggest-btn';
            btn.textContent = text;
            btn.addEventListener('click', () => {
                chatInput.value = text;
                sendMessage();
            });
            chatSuggestions.appendChild(btn);
        });
    }

    function appendMessage(sender, text) {
        if (!chatMessages) return;
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}`;
        if (sender === 'bot') {
            msgDiv.innerHTML = parseMarkdown(text);
        } else {
            msgDiv.textContent = text;
        }
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        if (text.length > 1000) {
            alert(translations[currentLang].chat_limit_error);
            return;
        }

        chatInput.value = '';
        appendMessage('user', text);

        // Render typing indicator
        const indicator = document.createElement('div');
        indicator.className = 'chat-message bot typing-indicator-container';
        indicator.innerHTML = `
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        `;
        chatMessages.appendChild(indicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            const response = await fetch(CHAT_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: text,
                    history: chatHistory
                })
            });

            // Remove indicator
            const indicatorEl = chatMessages.querySelector('.typing-indicator-container');
            if (indicatorEl) {
                chatMessages.removeChild(indicatorEl);
            }

            if (!response.ok) {
                throw new Error('API Error');
            }

            const data = await response.json();
            const reply = data.response;

            appendMessage('bot', reply);
            chatHistory.push({ role: 'user', text: text });
            chatHistory.push({ role: 'bot', text: reply });

            // Limit history to 10 messages
            if (chatHistory.length > 10) {
                chatHistory.shift();
                chatHistory.shift();
            }
        } catch (error) {
            const indicatorEl = chatMessages.querySelector('.typing-indicator-container');
            if (indicatorEl) {
                chatMessages.removeChild(indicatorEl);
            }
            appendMessage('bot', translations[currentLang].chat_error);
            console.error('Chat Error:', error);
        }
    }

    if (chatbotToggle && chatbotWindow && chatClose) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('hidden');
            chatbotToggle.classList.toggle('open');
            if (!chatbotWindow.classList.contains('hidden')) {
                sendWelcomeMessage();
                chatInput.focus();
            }
        });

        chatClose.addEventListener('click', () => {
            chatbotWindow.classList.add('hidden');
            chatbotToggle.classList.remove('open');
        });
    }

    if (chatSend && chatInput) {
        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    btnTr.addEventListener('click', () => setLanguage('tr'));
    btnEn.addEventListener('click', () => setLanguage('en'));

    // Initialize default language and typewriter on page load
    setLanguage('tr');
});
