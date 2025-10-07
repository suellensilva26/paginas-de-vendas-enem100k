# 🧠 NeuroHack ENEM - Landing Page

## 📋 Descrição

Página de vendas altamente otimizada para conversão do produto **NeuroHack ENEM**, um sistema de neurociência aplicada para aprovação no ENEM em 30 dias.

## 🎯 Características Principais

### ✨ Funcionalidades Implementadas

- ✅ **Single Page Application (SPA)** responsiva
- ✅ **Design Mobile-First** com breakpoints: 320px, 768px, 1024px, 1440px
- ✅ **Performance Otimizada**: <3s loading time
- ✅ **SEO Completo** com meta tags Open Graph e Twitter Cards
- ✅ **11 Seções Estratégicas** de conversão
- ✅ **Animações CSS** suaves e profissionais
- ✅ **JavaScript Vanilla** puro (sem dependências)

### 🎨 Elementos Visuais

**Paleta de Cores:**
- 🔴 Vermelho Urgência: `#FF4757`
- 💰 Dourado Premium: `#F39C12`
- ✅ Verde Aprovação: `#2ECC71`
- ⚫ Preto Autoridade: `#2C3E50`

**Tipografia:**
- Fonte: **Inter** (Google Fonts)
- Títulos: Inter Bold, 28px+
- Subtítulos: Inter Semibold, 20px+
- Texto: Inter Regular, 16px+
- CTAs: Inter Bold, 18px+

### 🚀 Funcionalidades JavaScript

#### 1. Countdown Timer ENEM
- Contador regressivo em tempo real até o ENEM 2025 (09/11/2025)
- Atualização automática a cada minuto
- Formatação com zero à esquerda

#### 2. Countdown de Urgência (72 horas)
- Timer de 72 horas persistente (LocalStorage)
- Atualização a cada segundo
- Reset automático quando expira

#### 3. Contador de Visitantes Fake
- Número aleatório entre 8-15 pessoas
- Atualização a cada 45-90 segundos
- Efeito de pulsação visual

#### 4. Sistema de Vagas Limitadas
- Contador de 47/500 vagas
- Diminuição gradual simulada
- Barra de progresso visual
- Persistência com LocalStorage

#### 5. Animações Avançadas
- **Fade-in ao scroll** (Intersection Observer)
- **Hover effects** nos botões
- **Pulse animation** em elementos de urgência
- **Counter animation** para estatísticas
- **Smooth scroll** para navegação

#### 6. Carrossel de Depoimentos
- Rotação automática a cada 5 segundos
- Navegação por dots clicáveis
- Transições suaves

#### 7. FAQ Accordion
- Expansão/colapso suave
- Fecha outros ao abrir um novo
- Ícone animado (+/×)

#### 8. Analytics Integrados
- **Google Analytics 4** (configurável)
- **Facebook Pixel** (configurável)
- Tracking de eventos:
  - Cliques em CTAs
  - Scroll depth (25%, 50%, 75%, 100%)
  - Tempo na página
  - Cliques em métodos de pagamento
  - Exit intent

#### 9. Progress Bar
- Barra de progresso no topo
- Atualização em tempo real no scroll
- Gradiente dourado

#### 10. Floating CTA Mobile
- Botão fixo que aparece após scroll
- Efeito slide-up suave
- Visível apenas após sair do hero

### 📱 Responsividade

#### Mobile (320px - 767px)
- Layout 1 coluna
- Fonte reduzida
- Botões otimizados para toque
- Floating CTA sempre visível

#### Tablet (768px - 1023px)
- Grid 2 colunas para cards
- Layout intermediário

#### Desktop (1024px+)
- Grid completo 2x3 ou 3x3
- Hover effects aprimorados
- Layout otimizado

#### Large Desktop (1440px+)
- Container expandido (1400px)
- Fontes maiores
- Espaçamento generoso

## 🛠️ Instalação

### Opção 1: Deploy Simples

1. **Clone ou baixe os arquivos:**
   ```bash
   git clone [url-do-repo]
   cd pagina-de-vendas
   ```

2. **Abra o `index.html` no navegador:**
   - Duplo clique no arquivo
   - Ou use um servidor local:
     ```bash
     python -m http.server 8000
     # Acesse: http://localhost:8000
     ```

### Opção 2: Deploy em Produção

#### Vercel (Recomendado)
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

#### GitHub Pages
1. Commit os arquivos
2. Ative GitHub Pages nas configurações
3. Acesse: `https://[seu-usuario].github.io/[repo]`

## 🔧 Configuração

### 1. Google Analytics
```javascript
// No index.html, linha ~640
gtag('config', 'G-XXXXXXXXXX'); // Substitua pelo seu ID
```

### 2. Facebook Pixel
```javascript
// No index.html, linha ~648
fbq('init', 'YOUR_PIXEL_ID'); // Substitua pelo seu ID
```

### 3. Data do ENEM
```javascript
// No script.js, linha 6
enemDate: new Date('2025-11-09T00:00:00'), // Ajuste se necessário
```

### 4. WhatsApp
```javascript
// No script.js, linha 402
const phone = '5511999999999'; // Substitua pelo número real
```

### 5. Link do Produto
```html
<!-- No index.html, procure por onclick="window.open" -->
<button onclick="window.open('https://enem-30x-boost.vercel.app/', '_blank')">
```

## 📊 Otimizações de Performance

### Implementadas:
- ✅ Critical CSS inline
- ✅ Preconnect para Google Fonts
- ✅ Lazy loading de imagens (preparado)
- ✅ Throttle/Debounce em eventos
- ✅ Intersection Observer para animações
- ✅ LocalStorage para persistência
- ✅ Minificação CSS (produção)

### Recomendadas:
- 🔄 Comprimir imagens (WebP)
- 🔄 Minificar HTML/CSS/JS
- 🔄 Ativar GZIP no servidor
- 🔄 CDN para assets estáticos
- 🔄 Service Worker (PWA)

## 🎯 Taxa de Conversão Esperada

**Meta:** 15-25% (vs 2-5% padrão)

**Elementos de Conversão:**
1. ✅ Urgência (countdown + escassez)
2. ✅ Prova social (15.847 aprovados)
3. ✅ Garantia tripla
4. ✅ Ancoragem de preço (R$ 1.422 → R$ 197)
5. ✅ CTAs estratégicos (6+ posições)
6. ✅ Dor vs Solução bem definidos
7. ✅ Benefícios claros e quantificados

## 📈 Testes A/B Preparados

### Variáveis para Testar:

**Headline:**
- Versão A: "DESCOBERTO ÀS VÉSPERAS DO ENEM 2025?"
- Versão B: "ÚLTIMA CHANCE PARA PASSAR NO ENEM 2025"

**Preço:**
- Versão A: R$ 197
- Versão B: R$ 247

**CTA Color:**
- Versão A: Vermelho (#FF4757)
- Versão B: Verde (#2ECC71)

**Timer Position:**
- Versão A: Header
- Versão B: Sticky top

## 🐛 Troubleshooting

### Countdown não funciona
- Verifique a data no `script.js`
- Confirme que JavaScript está habilitado
- Verifique console do navegador (F12)

### Animações não aparecem
- Verifique suporte do navegador para Intersection Observer
- Confirme que CSS está carregado
- Teste em modo anônimo (sem extensões)

### LocalStorage não persiste
- Verifique configurações de privacidade
- Confirme que cookies estão habilitados
- Teste em modo normal (não anônimo)

## 📱 Compatibilidade

### Navegadores Suportados:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

### Dispositivos Testados:
- ✅ iPhone 12/13/14/15
- ✅ Samsung Galaxy S20+
- ✅ iPad Pro
- ✅ Desktop HD/Full HD/4K

## 🔐 Segurança

- SSL obrigatório em produção
- Validação de formulários (se adicionar)
- Sanitização de inputs
- HTTPS para todas as integrações
- PCI Compliance para pagamentos

## 📝 Checklist de Lançamento

Antes de colocar no ar:

- [ ] Substituir IDs de Analytics e Pixel
- [ ] Configurar número do WhatsApp
- [ ] Testar todos os links de pagamento
- [ ] Validar meta tags (Open Graph, Twitter)
- [ ] Testar em diferentes dispositivos
- [ ] Verificar PageSpeed Score (meta: 90+)
- [ ] Ativar SSL/HTTPS
- [ ] Configurar domínio customizado
- [ ] Testar formulários (se houver)
- [ ] Revisar textos e preços
- [ ] Configurar redirects (se necessário)
- [ ] Backup dos arquivos

## 📞 Suporte

Para dúvidas ou melhorias:
- 📧 Email: contato@neurohackenem.com.br
- 📱 WhatsApp: (11) 99999-9999
- 🌐 Site: https://enem-30x-boost.vercel.app/

## 📄 Licença

© 2025 NeuroHack ENEM. Todos os direitos reservados.

---

**Desenvolvido com 🧠 e ❤️ para maximizar conversões e transformar vidas.**

**#ENEM2025 #NeuroHack #AprovacaoGarantida**



