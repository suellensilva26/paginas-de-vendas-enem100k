// ==========================================
// ARQUIVO DE CONFIGURAÇÃO - NeuroHack ENEM
// ==========================================
// Use este arquivo para centralizar todas as configurações
// da landing page. Facilita testes A/B e ajustes rápidos.

const NEUROHACK_CONFIG = {
    // ==========================================
    // INFORMAÇÕES DO PRODUTO
    // ==========================================
    product: {
        name: 'NeuroHack ENEM',
        url: 'https://enem-30x-boost.vercel.app/',
        version: '1.0.0'
    },

    // ==========================================
    // PREÇOS
    // ==========================================
    pricing: {
        originalPrice: 1422,
        currentPrice: 197,
        installments: 12,
        installmentValue: 19.49,
        currency: 'R$',
        discountPercentage: 86 // (1422-197)/1422 * 100
    },

    // ==========================================
    // DATAS IMPORTANTES
    // ==========================================
    dates: {
        enemDate: '2025-11-09T00:00:00', // Data do ENEM 2025
        urgencyHours: 72, // Horas do countdown de urgência
        launchDate: '2025-01-01T00:00:00'
    },

    // ==========================================
    // CONTATO
    // ==========================================
    contact: {
        email: 'contato@neurohackenem.com.br',
        phone: '5511999999999', // WhatsApp (com DDI)
        phoneFormatted: '(11) 99999-9999',
        supportUrl: 'https://suporte.neurohackenem.com.br'
    },

    // ==========================================
    // ANALYTICS
    // ==========================================
    analytics: {
        googleAnalyticsId: 'G-XXXXXXXXXX', // Substitua pelo seu ID
        facebookPixelId: 'YOUR_PIXEL_ID', // Substitua pelo seu ID
        hotjarId: null, // Opcional
        enabled: true
    },

    // ==========================================
    // ESTATÍSTICAS (Prova Social)
    // ==========================================
    stats: {
        studentsApproved: 15847,
        approvalRate: 92, // Porcentagem
        perfect1000Essays: 847,
        averageRating: 4.9
    },

    // ==========================================
    // ESCASSEZ
    // ==========================================
    scarcity: {
        totalSpots: 500,
        remainingSpots: 47,
        minViewers: 8,
        maxViewers: 15,
        viewerUpdateMin: 45000, // ms
        viewerUpdateMax: 90000  // ms
    },

    // ==========================================
    // MÓDULOS DO CURSO
    // ==========================================
    modules: [
        {
            id: 1,
            icon: '🧬',
            name: 'Neurociência da Aprendizagem',
            description: 'Como hackear seu cérebro para absorver informação 10x mais rápido usando protocolos de neuroplasticidade',
            originalPrice: 297
        },
        {
            id: 2,
            icon: '⚡',
            name: 'Método Pomodoro Turbinado',
            description: 'Técnica japonesa de concentração extrema que permite estudar 12h sem fadiga mental',
            originalPrice: 197
        },
        {
            id: 3,
            icon: '🎯',
            name: 'Memorização Fotográfica',
            description: 'Sistema de 7 técnicas de memorização usadas por campeões de memória mundial',
            originalPrice: 247
        },
        {
            id: 4,
            icon: '📊',
            name: 'Estratégia de Questões',
            description: 'Método ACER (Análise, Contexto, Eliminação, Resposta) para acertar mesmo sem saber o conteúdo',
            originalPrice: 227
        },
        {
            id: 5,
            icon: '✍️',
            name: 'Redação Nota 1000',
            description: 'Template exato usado por 847 alunos para tirar nota máxima na redação do ENEM',
            originalPrice: 297
        },
        {
            id: 6,
            icon: '🎭',
            name: 'Mentalidade de Aprovado',
            description: 'Protocolo psicológico para eliminar ansiedade, medo e bloqueios mentais no dia da prova',
            originalPrice: 157
        }
    ],

    // ==========================================
    // UNIVERSIDADES (Prova Social)
    // ==========================================
    universities: ['USP', 'UNICAMP', 'UFMG', 'UFRJ', 'UFPR', 'UFRGS', 'UFSC'],

    // ==========================================
    // DEPOIMENTOS
    // ==========================================
    testimonials: [
        {
            id: 1,
            image: '👨‍🎓',
            text: 'Comecei a estudar em outubro e passei em Medicina na USP! O Protocolo de Compressão Neural mudou minha vida. Consegui estudar 10h por dia sem cansar.',
            author: 'Lucas Mendes',
            course: 'Medicina USP 2024'
        },
        {
            id: 2,
            image: '👩‍🎓',
            text: 'Eu estava desesperada, tinha procrastinado o ano todo. Em 30 dias com o NeuroHack tirei 890 no ENEM e passei em Engenharia na UNICAMP!',
            author: 'Mariana Silva',
            course: 'Engenharia UNICAMP 2024'
        },
        {
            id: 3,
            image: '👨‍🎓',
            text: 'Tirei nota 1000 na redação usando o template do Módulo 5. É surreal como funciona. Gratidão eterna ao NeuroHack!',
            author: 'Rafael Costa',
            course: 'Direito UFMG 2024'
        }
    ],

    // ==========================================
    // CTAs (Calls to Action)
    // ==========================================
    ctas: {
        primary: '🚀 SIM! QUERO TRANSFORMAR MINHA VIDA EM 30 DIAS',
        secondary: '💰 QUERO PAGAR APENAS R$ 197',
        urgency: '⏰ GARANTIR MINHA VAGA AGORA',
        mobile: '📱 ACESSO IMEDIATO',
        payment: '💳 QUERO PAGAR APENAS R$ 197'
    },

    // ==========================================
    // GARANTIAS
    // ==========================================
    guarantees: [
        {
            id: 1,
            icon: '💯',
            title: 'Garantia #1: Resultados',
            description: 'Se você não melhorar sua performance em pelo menos 200 pontos seguindo o protocolo por 30 dias, devolvemos 100% do seu investimento.'
        },
        {
            id: 2,
            icon: '⏰',
            title: 'Garantia #2: 30 Dias',
            description: 'Não gostou? Sem perguntas. Você tem 30 dias para testar o método e pedir reembolso total se não gostar.'
        },
        {
            id: 3,
            icon: '🎁',
            title: 'Garantia #3: Bônus Eternos',
            description: 'Mesmo se pedir reembolso, você mantém todos os bônus do treinamento. Isso é o quanto confiamos no nosso método.'
        }
    ],

    // ==========================================
    // FAQ
    // ==========================================
    faqs: [
        {
            id: 1,
            question: 'Realmente funciona com apenas 30 dias de antecedência?',
            answer: 'Sim! Nosso Protocolo de Compressão Neural foi testado com mais de 15.847 alunos que começaram a estudar em outubro/novembro e foram aprovados. O segredo está na neurociência aplicada que otimiza seu aprendizado em 10x.'
        },
        {
            id: 2,
            question: 'Por quanto tempo terei acesso ao conteúdo?',
            answer: 'Acesso VITALÍCIO! Você paga uma única vez e tem acesso para sempre, incluindo todas as atualizações futuras sem custo adicional.'
        },
        {
            id: 3,
            question: 'E se eu não conseguir estudar 12h por dia?',
            answer: 'Temos protocolos adaptados para 4h, 6h e 8h de estudo. O importante não é a quantidade, mas a QUALIDADE do estudo usando nossas técnicas de neurociência.'
        },
        {
            id: 4,
            question: 'Como funciona a garantia de 30 dias?',
            answer: 'Simples: você tem 30 dias para testar todo o método. Se não gostar por QUALQUER motivo, basta enviar um email e devolvemos 100% do seu dinheiro. Sem burocracia.'
        },
        {
            id: 5,
            question: 'Preciso de conhecimento prévio?',
            answer: 'Não! O NeuroHack é focado em COMO estudar, não no QUE estudar. Você pode usar nosso protocolo com qualquer material que já possui (apostilas, vídeo-aulas, etc).'
        }
    ],

    // ==========================================
    // TESTES A/B
    // ==========================================
    abTests: {
        enabled: false, // Ativar quando configurar ferramenta de A/B test
        variants: {
            headline: {
                a: '🚨 DESCOBERTO ÀS VÉSPERAS DO ENEM 2025? NÃO ENTRE EM PÂNICO!',
                b: '⚡ ÚLTIMA CHANCE PARA PASSAR NO ENEM 2025 - MÉTODO COMPROVADO'
            },
            price: {
                a: 197,
                b: 247
            },
            ctaColor: {
                a: '#FF4757',
                b: '#2ECC71'
            }
        }
    },

    // ==========================================
    // FEATURES FLAGS
    // ==========================================
    features: {
        showCountdown: true,
        showScarcity: true,
        showTestimonials: true,
        showFAQ: true,
        enableAnalytics: true,
        enableWhatsApp: true,
        enableExitIntent: false, // Popup ao sair
        enableChatWidget: false // Widget de chat
    },

    // ==========================================
    // CORES (Design System)
    // ==========================================
    colors: {
        primary: '#FF6B6B',
        secondary: '#FF8E53',
        accent: '#F39C12',
        success: '#2ECC71',
        danger: '#FF4757',
        dark: '#2C3E50',
        light: '#F8F9FA'
    },

    // ==========================================
    // BREAKPOINTS
    // ==========================================
    breakpoints: {
        mobile: 320,
        tablet: 768,
        desktop: 1024,
        desktopLarge: 1440
    }
};

// Exportar configuração
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NEUROHACK_CONFIG;
}

// Disponibilizar globalmente
if (typeof window !== 'undefined') {
    window.NEUROHACK_CONFIG = NEUROHACK_CONFIG;
}



