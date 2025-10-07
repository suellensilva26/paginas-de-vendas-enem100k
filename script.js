// ==========================================
// CONFIGURAÇÕES GLOBAIS
// ==========================================
const CONFIG = {
    enemDate: new Date('2025-11-09T00:00:00'), // Data do ENEM 2025
    urgencyHours: 72, // 72 horas para oferta
    minViewers: 8,
    maxViewers: 15,
    viewerUpdateMin: 45000, // 45 segundos
    viewerUpdateMax: 90000, // 90 segundos
    spotsTotal: 500,
    spotsRemaining: 47
};

// ==========================================
// PROGRESS BAR
// ==========================================
function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
}

// ==========================================
// FLOATING CTA
// ==========================================
function handleFloatingCTA() {
    const floatingCTA = document.getElementById('floatingCTA');
    const heroSection = document.getElementById('hero');
    
    if (!floatingCTA || !heroSection) return;
    
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollPosition = window.pageYOffset + window.innerHeight;
    
    if (scrollPosition > heroBottom + 500) {
        floatingCTA.classList.add('visible');
    } else {
        floatingCTA.classList.remove('visible');
    }
}

// ==========================================
// COUNTDOWN ENEM
// ==========================================
function updateCountdownEnem() {
    const now = new Date().getTime();
    const distance = CONFIG.enemDate.getTime() - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    
    const daysEl = document.getElementById('enemDays');
    const hoursEl = document.getElementById('enemHours');
    const minutesEl = document.getElementById('enemMinutes');
    
    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    
    if (distance < 0) {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
    }
}

// ==========================================
// COUNTDOWN URGÊNCIA (72 HORAS)
// ==========================================
function initUrgencyCountdown() {
    // Verificar se já existe um deadline salvo
    let deadline = localStorage.getItem('urgencyDeadline');
    
    if (!deadline) {
        // Criar novo deadline de 72 horas
        deadline = new Date().getTime() + (CONFIG.urgencyHours * 60 * 60 * 1000);
        localStorage.setItem('urgencyDeadline', deadline);
    }
    
    return parseInt(deadline);
}

function updateCountdownUrgency() {
    const deadline = initUrgencyCountdown();
    const now = new Date().getTime();
    const distance = deadline - now;
    
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const hoursEl = document.getElementById('urgencyHours');
    const minutesEl = document.getElementById('urgencyMinutes');
    const secondsEl = document.getElementById('urgencySeconds');
    
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    
    if (distance < 0) {
        // Reset countdown
        localStorage.removeItem('urgencyDeadline');
        initUrgencyCountdown();
    }
}

// ==========================================
// CONTADOR DE VISITANTES FAKE
// ==========================================
function updateViewerCount() {
    const viewerCountEl = document.getElementById('viewerCount');
    if (!viewerCountEl) return;
    
    const randomCount = Math.floor(Math.random() * (CONFIG.maxViewers - CONFIG.minViewers + 1)) + CONFIG.minViewers;
    viewerCountEl.textContent = randomCount;
    
    // Próxima atualização em intervalo aleatório
    const nextUpdate = Math.random() * (CONFIG.viewerUpdateMax - CONFIG.viewerUpdateMin) + CONFIG.viewerUpdateMin;
    setTimeout(updateViewerCount, nextUpdate);
}

// ==========================================
// CONTADOR DE VAGAS
// ==========================================
function updateSpotsRemaining() {
    const spotsEl = document.getElementById('spotsRemaining');
    if (!spotsEl) return;
    
    // Verificar se já existe vagas salvas
    let spots = localStorage.getItem('spotsRemaining');
    
    if (!spots) {
        spots = CONFIG.spotsRemaining;
        localStorage.setItem('spotsRemaining', spots);
    }
    
    spotsEl.textContent = spots;
    
    // Atualizar barra de progresso
    const spotsBar = document.querySelector('.spots-filled');
    if (spotsBar) {
        const percentage = ((CONFIG.spotsTotal - spots) / CONFIG.spotsTotal) * 100;
        spotsBar.style.width = percentage + '%';
    }
    
    // Diminuir vagas aleatoriamente (simulação)
    const shouldDecrease = Math.random() < 0.1; // 10% de chance
    if (shouldDecrease && spots > 10) {
        spots--;
        localStorage.setItem('spotsRemaining', spots);
    }
}

// ==========================================
// ANIMATED COUNTERS
// ==========================================
function animateCounter(element, target, duration = 2000, decimals = 0) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
    }, 16);
}

function initCounters() {
    const counters = document.querySelectorAll('.stat-counter');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseFloat(entry.target.dataset.target);
                const decimals = target % 1 !== 0 ? 1 : 0;
                animateCounter(entry.target, target, 2000, decimals);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ==========================================
// FADE IN ON SCROLL
// ==========================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
}

// ==========================================
// TESTIMONIALS CAROUSEL
// ==========================================
let currentTestimonial = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    if (testimonials.length === 0) return;
    
    // Remove active class from all
    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    // Add active class to current
    if (testimonials[index]) {
        testimonials[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function initTestimonials() {
    const dots = document.querySelectorAll('.dot');
    
    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentTestimonial = index;
            showTestimonial(index);
        });
    });
    
    // Auto-rotate every 5 seconds
    setInterval(nextTestimonial, 5000);
}

// ==========================================
// FAQ ACCORDION
// ==========================================
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQs
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked FAQ if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 20;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// ANALYTICS EVENTS
// ==========================================
function trackEvent(category, action, label) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', action);
    }
    
    console.log('Event tracked:', category, action, label);
}

function initAnalytics() {
    // Track CTA clicks
    document.querySelectorAll('a[href="#payment"]').forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('CTA', 'click', button.textContent.trim());
        });
    });
    
    // Track scroll depth
    let scrollDepth = 0;
    window.addEventListener('scroll', () => {
        const depth = Math.floor((window.pageYOffset / document.documentElement.scrollHeight) * 100);
        
        if (depth > scrollDepth && depth % 25 === 0) {
            scrollDepth = depth;
            trackEvent('Scroll', 'depth', `${depth}%`);
        }
    });
    
    // Track time on page
    let timeOnPage = 0;
    setInterval(() => {
        timeOnPage += 30;
        if (timeOnPage % 60 === 0) {
            trackEvent('Time', 'on_page', `${timeOnPage}s`);
        }
    }, 30000);
    
    // Track payment button clicks
    document.querySelectorAll('.payment-btn').forEach(button => {
        button.addEventListener('click', () => {
            const method = button.querySelector('strong').textContent;
            trackEvent('Payment', 'click', method);
        });
    });
}

// ==========================================
// LAZY LOADING IMAGES
// ==========================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ==========================================
// PREVENT ACCIDENTAL EXIT
// ==========================================
function initExitIntent() {
    let hasShownIntent = false;
    
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !hasShownIntent) {
            hasShownIntent = true;
            trackEvent('Exit', 'intent', 'mouse_leave');
            // Aqui você pode adicionar um popup de retenção
        }
    });
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
function optimizePerformance() {
    // Preload critical resources
    const criticalResources = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
    ];
    
    criticalResources.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        document.head.appendChild(link);
    });
    
    // Defer non-critical scripts
    window.addEventListener('load', () => {
        // Load non-critical scripts here
    });
}

// ==========================================
// MOBILE DETECTION
// ==========================================
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ==========================================
// WHATSAPP INTEGRATION
// ==========================================
function initWhatsApp() {
    const whatsappButtons = document.querySelectorAll('[data-whatsapp]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', () => {
            const message = encodeURIComponent('Olá! Tenho interesse no NeuroHack ENEM.');
            const phone = '5511999999999'; // Substitua pelo número real
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        });
    });
}

// ==========================================
// COPY TO CLIPBOARD
// ==========================================
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copiado para a área de transferência!');
        });
    } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Copiado para a área de transferência!');
    }
}

// ==========================================
// KEYBOARD SHORTCUTS (Easter Eggs)
// ==========================================
function initKeyboardShortcuts() {
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            // Easter egg ativado!
            document.body.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                document.body.style.transform = 'rotate(0deg)';
            }, 2000);
        }
    });
}

// ==========================================
// LOCAL STORAGE UTILITIES
// ==========================================
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.warn('LocalStorage não disponível:', e);
    }
}

function getFromLocalStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
        console.warn('Erro ao ler LocalStorage:', e);
        return defaultValue;
    }
}

// ==========================================
// FORM VALIDATION (se necessário)
// ==========================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10,11}$/;
    return re.test(phone.replace(/\D/g, ''));
}

// ==========================================
// DEBOUNCE UTILITY
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// THROTTLE UTILITY
// ==========================================
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// SCROLL EVENT HANDLER (Throttled)
// ==========================================
const handleScroll = throttle(() => {
    updateProgressBar();
    handleFloatingCTA();
}, 100);

// ==========================================
// NOVOS RECURSOS - PÁGINA MILIONÁRIA
// ==========================================

// Live Counter - Usuários Ativos
function updateUsuariosAtivos() {
    const counter = document.getElementById('usuariosAtivos');
    if (!counter) return;
    
    const min = 750;
    const max = 950;
    const current = parseInt(counter.textContent);
    const change = Math.floor(Math.random() * 20) - 10; // -10 a +10
    const newValue = Math.max(min, Math.min(max, current + change));
    
    animateCounter(counter, newValue, 1000, 0);
    
    setTimeout(updateUsuariosAtivos, 5000); // Atualiza a cada 5 segundos
}

// Badge de Pontos - Gamificação
function updateBadgeProgress() {
    const pontosEl = document.getElementById('pontosRestantes');
    if (!pontosEl) return;
    
    let pontos = parseInt(pontosEl.textContent);
    pontos = Math.max(0, pontos - Math.floor(Math.random() * 5));
    
    pontosEl.textContent = pontos;
    
    if (pontos <= 0) {
        pontosEl.parentElement.innerHTML = '<strong>🏆 NOVO BADGE DESBLOQUEADO!</strong>';
        setTimeout(() => {
            pontosEl.textContent = 500;
        }, 3000);
    }
    
    setTimeout(updateBadgeProgress, 8000);
}

// Chat Button - IA Assistente
function initChatButton() {
    const chatBtn = document.getElementById('chatButton');
    if (!chatBtn) return;
    
    chatBtn.addEventListener('click', () => {
        alert('💬 Chat com IA: Em breve! Por enquanto, use o WhatsApp: (11) 99999-9999');
        trackEvent('Engagement', 'chat_click', 'AI Assistant');
    });
}

// Exit Intent Modal - Desconto Extra 10%
let exitModalShown = false;

function initExitModal() {
    const modal = document.getElementById('exitModal');
    const fecharBtn = document.getElementById('fecharModal');
    
    if (!modal || !fecharBtn) return;
    
    // Detectar mouse saindo da página
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !exitModalShown) {
            exitModalShown = true;
            modal.classList.add('active');
            trackEvent('Exit', 'modal_shown', 'Discount 10%');
        }
    });
    
    // Fechar modal
    fecharBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        trackEvent('Exit', 'modal_rejected', 'User declined');
    });
    
    // Fechar ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

// Hotspots Interativos
function initHotspots() {
    const hotspots = document.querySelectorAll('.hotspot');
    
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', () => {
            const info = hotspot.dataset.info;
            alert(`ℹ️ ${info}`);
            trackEvent('Interaction', 'hotspot_click', info);
        });
    });
}

// Animação de Vagas Decrescente
function updateVagasRestantes() {
    const vagasEl = document.getElementById('vagasRestantes');
    if (!vagasEl) return;
    
    let vagas = parseInt(vagasEl.textContent);
    
    // 30% de chance de diminuir 1 vaga
    if (Math.random() < 0.3 && vagas > 20) {
        vagas--;
        vagasEl.textContent = vagas;
        
        // Atualizar barra de progresso
        const barra = document.querySelector('.barra-preenchida');
        if (barra) {
            const percent = ((500 - vagas) / 500) * 100;
            barra.style.width = percent + '%';
        }
        
        // Se vagas < 30, aumentar urgência
        if (vagas < 30) {
            vagasEl.style.color = 'var(--neon-pink)';
            vagasEl.parentElement.style.animation = 'shake 0.5s infinite';
        }
    }
    
    setTimeout(updateVagasRestantes, 30000); // A cada 30s
}

// Lazy Loading Otimizado
function initLazyLoadingOptimized() {
    const lazyElements = document.querySelectorAll('.lazy');
    
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                if (element.tagName === 'IMG') {
                    element.src = element.dataset.src;
                } else if (element.tagName === 'VIDEO') {
                    element.src = element.dataset.src;
                    element.load();
                }
                
                element.classList.add('loaded');
                lazyObserver.unobserve(element);
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    lazyElements.forEach(el => lazyObserver.observe(el));
}

// ==========================================
// INICIALIZAÇÃO COMPLETA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🧠 NeuroHack ENEM - Landing Page MILIONÁRIA carregada!');
    
    // Funcionalidades originais
    initSmoothScroll();
    initScrollAnimations();
    initCounters();
    initTestimonials();
    initFAQ();
    initAnalytics();
    initLazyLoading();
    initExitIntent();
    initWhatsApp();
    initKeyboardShortcuts();
    optimizePerformance();
    
    // Novas funcionalidades milionárias
    initChatButton();
    initExitModal();
    initHotspots();
    initLazyLoadingOptimized();
    updateUsuariosAtivos();
    updateBadgeProgress();
    updateVagasRestantes();
    
    // Iniciar countdowns
    updateCountdownEnem();
    setInterval(updateCountdownEnem, 60000); // Atualizar a cada minuto
    
    updateCountdownUrgency();
    setInterval(updateCountdownUrgency, 1000); // Atualizar a cada segundo
    
    // Iniciar contador de visitantes
    updateViewerCount();
    
    // Atualizar vagas
    updateSpotsRemaining();
    setInterval(updateSpotsRemaining, 30000); // Atualizar a cada 30 segundos
    
    // Event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', debounce(() => {
        console.log('Window resized');
    }, 250));
    
    // Detect mobile
    if (isMobile()) {
        document.body.classList.add('mobile');
    }
    
    // Page visibility
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            trackEvent('Engagement', 'tab_hidden', '');
        } else {
            trackEvent('Engagement', 'tab_visible', '');
        }
    });
    
    // Track page load time
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        trackEvent('Performance', 'page_load', `${loadTime}ms`);
        console.log(`⚡ Página carregada em ${loadTime}ms`);
    });
});

// ==========================================
// SERVICE WORKER (PWA - Opcional)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registrado:', registration))
        //     .catch(error => console.log('SW error:', error));
    });
}

// ==========================================
// ERROR HANDLING
// ==========================================
window.addEventListener('error', (e) => {
    console.error('Erro capturado:', e.error);
    trackEvent('Error', 'javascript', e.message);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Promise rejeitada:', e.reason);
    trackEvent('Error', 'promise', e.reason);
});

// ==========================================
// CONSOLE EASTER EGG
// ==========================================
console.log('%c🧠 NeuroHack ENEM', 'font-size: 24px; font-weight: bold; color: #F39C12;');
console.log('%cVocê é curioso! Gostamos disso. 🚀', 'font-size: 16px; color: #2ECC71;');
console.log('%cQue tal garantir sua aprovação? 👉 https://enem-30x-boost.vercel.app/', 'font-size: 14px; color: #FF4757;');

// ==========================================
// EXPORT FUNCTIONS (para uso externo)
// ==========================================
window.NeuroHack = {
    trackEvent,
    copyToClipboard,
    validateEmail,
    validatePhone,
    isMobile
};



