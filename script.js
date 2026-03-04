/* CoreGen Static Interactivity */

// --- Constants & Data ---
const SERVICES = [
    {
        title: 'Web Development',
        desc: 'Modern, responsive web applications built with latest technologies and best practices.',
        icon: 'code'
    },
    {
        title: 'App Development',
        desc: 'Native and cross-platform mobile applications for iOS and Android platforms.',
        icon: 'smartphone'
    },
    {
        title: 'Software Designing & Development',
        desc: 'End-to-end software solutions tailored to your business requirements and goals.',
        icon: 'palette'
    },
    {
        title: 'Data Visualization & Dashboards',
        desc: 'Interactive dashboards and visualizations for data-driven decision making.',
        icon: 'bar-chart'
    },
    {
        title: 'Business Analytics & Reporting',
        desc: 'Comprehensive analytics and reporting solutions to track business performance.',
        icon: 'file-text'
    },
    {
        title: 'API Development & Integration',
        desc: 'Robust APIs and seamless integrations with third-party services.',
        icon: 'layers'
    },
    {
        title: 'Database Design & Management',
        desc: 'Scalable database architecture and optimization for high performance.',
        icon: 'zap'
    },
    {
        title: 'Automation & AI Integration',
        desc: 'Intelligent automation and AI solutions to streamline operations.',
        icon: 'brain'
    },
    {
        title: 'IT Support & Maintenance',
        desc: '24/7 technical support and maintenance for your systems and applications.',
        icon: 'headphones'
    },
    {
        title: 'Digital Marketing & SEO',
        desc: 'Strategic online marketing and search engine optimization to boost your brand visibility.',
        icon: 'trending-up'
    }
];

const RESEARCH = [
    {
        title: 'Rice Leaf Disease Detection Using EfficientNet',
        problem: 'Rice crops often suffer from diseases like Bacterial Leaf Blight. Traditional diagnosis is manual. This research aims to create automated detection using AI.',
        highlights: ['EfficientNetV2-S', 'Explainable AI (Grad-CAM)', '78%–81% Accuracy'],
        isDetailed: true
    },
    {
        title: 'AI-Enabled GPS Attendance Monitoring',
        desc: 'Comprehensive system for tracking employee attendance and monitoring live status with GPS.',
        image: 'images/ai-enable.png'
    },
    {
        title: 'The Art of Deception: Social Engineering',
        desc: 'In-depth study into psychological techniques used in social engineering attacks.',
        image: 'images/security.png'
    }
];

const TESTIMONIALS = [
    { name: 'Sarah Johnson', role: 'CEO, Tech Innovations', content: 'CoreGen exceeded our expectations with their innovative approach to our web application.' },
    { name: 'Michael Chen', role: 'Product Manager, Data Dynamics', content: 'The analytics dashboard they created transformed how we understand our data.' },
    { name: 'Emma Williams', role: 'CTO, Cloud Systems', content: 'Their expertise in cloud systems and database optimization saved us significant costs.' }
];

// --- Utilities ---
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// --- Dynamic Content Injection ---
function initServices() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;
    grid.innerHTML = SERVICES.map((s, i) => `
        <div class="group glass-hover p-6 rounded-xl flex flex-col h-full bg-white">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <i data-lucide="${s.icon}" class="text-primary w-6 h-6"></i>
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">${s.title}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">${s.desc}</p>
        </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
}

function initResearch() {
    const list = document.getElementById('research-list');
    if (!list) return;
    list.innerHTML = RESEARCH.map((r, i) => r.isDetailed ? `
        <div class="glass-hover p-8 rounded-xl bg-white border border-black/5 shadow-sm" data-aos="fade-up" data-aos-delay="${i * 100}">
            <div class="flex flex-col lg:flex-row gap-8">
                <div class="flex-1">
                    <h3 class="text-2xl font-bold text-slate-900 mb-4">${r.title}</h3>
                    <p class="text-slate-700 mb-4">${r.problem}</p>
                </div>
                <div class="flex-1 bg-slate-50 p-6 rounded-lg border border-black/5">
                    <h4 class="text-sm font-bold text-secondary uppercase tracking-wider mb-4">Highlights</h4>
                    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                        ${r.highlights.map(h => `<li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-accent"></div>${h}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    ` : `
        <div class="glass-hover p-8 rounded-xl bg-white border border-black/5 shadow-sm flex flex-col md:flex-row gap-6" data-aos="fade-up" data-aos-delay="${i * 100}">
            <div class="flex-1">
                <h3 class="text-xl font-bold text-slate-900 mb-2">${r.title}</h3>
                <p class="text-slate-600 text-sm">${r.desc}</p>
            </div>
            ${r.image ? `<img src="${r.image}" class="md:w-48 h-32 object-contain bg-slate-50 p-2 rounded-lg" />` : ''}
        </div>
    `).join('');
}

function initStatsGrid() {
    const grid = document.getElementById('stats-grid');
    if (!grid) return;
    const stats = [
        { label: 'Total Visitors', target: 1000 },
        { label: 'Projects Completed', target: 250 },
        { label: 'Interns Trained', target: 500 },
        { label: 'Technologies Used', target: 40 }
    ];
    grid.innerHTML = stats.map((s, i) => `
        <div class="glass-hover p-8 rounded-xl text-center group bg-white/50 border border-black/10" data-aos="zoom-in" data-aos-delay="${i * 100}">
            <div class="text-4xl md:text-5xl font-bold gradient-text mb-2" data-target="${s.target}">0</div>
            <p class="text-slate-700 font-medium">${s.label}</p>
        </div>
    `).join('');
}

function initTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;
    grid.innerHTML = TESTIMONIALS.map((t, i) => `
        <div class="glass-hover p-8 rounded-xl flex flex-col bg-white border border-black/5" data-aos="fade-up" data-aos-delay="${i * 100}">
            <div class="flex gap-1 mb-4 text-accent">★★★★★</div>
            <p class="text-slate-700 text-base leading-relaxed mb-6 italic">"${t.content}"</p>
            <div class="border-t border-black/10 pt-4">
                <p class="font-semibold text-slate-900">${t.name}</p>
                <p class="text-secondary text-sm">${t.role}</p>
            </div>
        </div>
    `).join('');
}

// --- Forms Logic ---
function selectCareer(type) {
    const options = document.getElementById('career-options');
    const formContainer = document.getElementById('application-form-container');
    options.classList.add('hidden');

    // Add card styling to the container
    formContainer.className = "max-w-2xl mx-auto glass-hover p-8 rounded-xl bg-white/50 border border-black/10 transition-all duration-300";
    formContainer.classList.remove('hidden');

    if (type === 'internship') {
        formContainer.innerHTML = `
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold text-slate-900">Internship Application</h3>
                <button onclick="resetCareerForms()" class="text-slate-500 hover:text-slate-800">✕</button>
            </div>
            <form id="career-form" class="space-y-6">
                <input type="hidden" name="formType" value="Internship Application">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">Full Name</label>
                        <input type="text" name="fullName" placeholder="Your name" required class="w-full px-4 py-3 border border-black/10 rounded-lg text-slate-800">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">Email</label>
                        <input type="email" name="email" placeholder="your@email.com" required class="w-full px-4 py-3 border border-black/10 rounded-lg text-slate-800">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">Phone</label>
                        <input type="tel" name="phone" placeholder="+1 (555) 000-0000" required class="w-full px-4 py-3 border border-black/10 rounded-lg text-slate-800">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">University</label>
                        <input type="text" name="university_role" placeholder="Your university" required class="w-full px-4 py-3 border border-black/10 rounded-lg text-slate-800">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-800 mb-2">Position Applying For</label>
                    <select name="position" required class="w-full px-4 py-3 border border-black/10 rounded-lg bg-white text-slate-800">
                        <option value="" disabled selected>Select a position</option>
                        <option value="fullstack">Full-Stack Web Developer Intern</option>
                        <option value="python">Python Developer Intern</option>
                        <option value="datascience">Data Science & Analytics Intern</option>
                        <option value="ai">Artificial Intelligence (AI) Intern</option>
                        <option value="frontend">Front-End Developer Intern</option>
                        <option value="analytics">Business Analytics</option>
                        <option value="marketing">Digital Marketing & SEO</option>
                    </select>
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-800 mb-2">Field of Study</label>
                    <label class="block text-sm font-semibold text-slate-800 mb-2">Cover Letter</label>
                    <textarea name="coverLetter" placeholder="Tell us about yourself..." rows="4" required class="w-full px-4 py-3 border border-black/10 rounded-lg resize-none"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-800 mb-2">Upload Resume/CV</label>
                    <input type="file" name="resume" accept=".pdf,.doc,.docx" required class="w-full px-4 py-3 border border-black/10 rounded-lg">
                </div>
                <button type="submit" class="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all">Submit Internship Application</button>
            </form>
        `;
    } else {
        formContainer.innerHTML = `
            <div class="flex items-center justify-between mb-6">
                <h3 class="text-2xl font-bold text-slate-900">Job Application</h3>
                <button onclick="resetCareerForms()" class="text-slate-500 hover:text-slate-800">✕</button>
            </div>
            <form id="career-form" class="space-y-6">
                <input type="hidden" name="formType" value="Job Application">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">Full Name</label>
                        <input type="text" name="fullName" placeholder="Your name" required class="w-full px-4 py-3 border border-black/10 rounded-lg">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">Email</label>
                        <input type="email" name="email" placeholder="your@email.com" required class="w-full px-4 py-3 border border-black/10 rounded-lg">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">Phone</label>
                        <input type="tel" name="phone" placeholder="+1 (555) 000-0000" required class="w-full px-4 py-3 border border-black/10 rounded-lg">
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-slate-800 mb-2">Current Role</label>
                        <input type="text" name="university_role" placeholder="Your current position" required class="w-full px-4 py-3 border border-black/10 rounded-lg">
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-800 mb-2">Years of Experience</label>
                    <input type="text" name="field_study_experience" placeholder="e.g., 5+ years" required class="w-full px-4 py-3 border border-black/10 rounded-lg">
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-800 mb-2">Cover Letter</label>
                    <textarea name="coverLetter" placeholder="Tell us about yourself..." rows="4" required class="w-full px-4 py-3 border border-black/10 rounded-lg resize-none"></textarea>
                </div>
                <div>
                    <label class="block text-sm font-semibold text-slate-800 mb-2">Upload Resume/CV</label>
                    <input type="file" name="resume" accept=".pdf,.doc,.docx" required class="w-full px-4 py-3 border border-black/10 rounded-lg">
                </div>
                <button type="submit" class="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all">Submit Job Application</button>
            </form>
        `;
    }

    document.getElementById('career-form').addEventListener('submit', (e) => handleFormSubmit(e, type === 'internship' ? 'Internship Application' : 'Job Application'));
}

function resetCareerForms() {
    document.getElementById('career-options').classList.remove('hidden');
    document.getElementById('application-form-container').classList.add('hidden');
}

// --- Stats Animation ---
function initStatsCounter() {
    const stats = document.querySelectorAll('[data-target]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    stats.forEach(s => observer.observe(s));
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start) + '+';
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}

// --- Main Form Submission Logic ---
async function handleFormSubmit(e, type) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerText;
    btn.innerText = 'Sending...';
    btn.disabled = true;

    const formData = new FormData(e.target);
    const data = {
        formType: type,
        timestamp: new Date().toLocaleString()
    };

    // Convert form fields to object
    formData.forEach((value, key) => {
        if (key !== 'resume') {
            data[key] = value;
        }
    });

    // Handle File Upload if exists
    const fileInput = e.target.querySelector('input[type="file"]');
    if (fileInput && fileInput.files[0]) {
        const file = fileInput.files[0];
        try {
            const resumeData = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve({
                    base64: (reader.result).split(',')[1],
                    name: file.name,
                    type: file.type
                });
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
            data.resume = resumeData;
        } catch (err) {
            console.error('File reading error:', err);
        }
    }

    try {
        await fetch('https://script.google.com/macros/s/AKfycbwITvVMiUwAmrjDh4M9SpmxINzSKeWnzkMH5l_Eo-zUnpdbC1DJspEtTMZ53D2F8uIy/exec', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(data)
        });
        alert('Thank you! Your submission has been received.');
        e.target.reset();
        if (type.includes('Application')) {
            resetCareerForms();
        }
    } catch (err) {
        console.error('Submission error:', err);
        alert('Submission failed. Please try again.');
    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initServices();
    initResearch();
    initStatsGrid();
    initStatsCounter();
    initTestimonials();

    document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobileMenu);

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => handleFormSubmit(e, 'Contact Form'));
    }

    // Scroll Logic for Back to Top
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.remove('hidden');
            backToTop.classList.add('flex');
        } else {
            backToTop.classList.add('hidden');
            backToTop.classList.remove('flex');
        }
    });
    // Remove Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-fade');
            setTimeout(() => preloader.remove(), 700);
        }, 1500);
    }
});
