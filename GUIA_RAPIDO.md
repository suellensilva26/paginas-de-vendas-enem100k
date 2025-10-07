# 🚀 GUIA RÁPIDO - NeuroHack ENEM Landing Page

## ⚡ Início Rápido (5 minutos)

### 1️⃣ Abrir a Página
```bash
# Opção 1: Duplo clique no index.html
# Opção 2: Servidor local
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 2️⃣ Configurações Essenciais

#### 📊 Google Analytics
**Arquivo:** `index.html` (linha ~640)
```javascript
gtag('config', 'G-XXXXXXXXXX'); // ← SEU ID AQUI
```

#### 📘 Facebook Pixel
**Arquivo:** `index.html` (linha ~648)
```javascript
fbq('init', 'YOUR_PIXEL_ID'); // ← SEU ID AQUI
```

#### 📱 WhatsApp
**Arquivo:** `script.js` (linha ~402)
```javascript
const phone = '5511999999999'; // ← SEU NÚMERO AQUI
```

#### 🔗 Link do Produto
**Arquivo:** `index.html` (procure por "onclick")
```html
onclick="window.open('SUA_URL_AQUI', '_blank')"
```

### 3️⃣ Deploy Instantâneo

#### Vercel (Recomendado)
```bash
npx vercel --prod
```

#### Netlify
```bash
npx netlify-cli deploy --prod --dir .
```

## 📋 Checklist de Lançamento

```
[ ] Configurar Google Analytics ID
[ ] Configurar Facebook Pixel ID
[ ] Atualizar número do WhatsApp
[ ] Atualizar links de pagamento
[ ] Testar em mobile (Chrome DevTools)
[ ] Testar countdown timers
[ ] Verificar meta tags (Open Graph)
[ ] Fazer deploy
[ ] Configurar domínio customizado
[ ] Testar performance (PageSpeed Insights)
```

## 🎨 Personalização Rápida

### Mudar Cores Principais
**Arquivo:** `styles.css` (linhas 16-22)
```css
--red-urgency: #FF4757;    /* Vermelho dos CTAs */
--gold-premium: #F39C12;   /* Dourado premium */
--green-success: #2ECC71;  /* Verde de aprovação */
```

### Mudar Headline Principal
**Arquivo:** `index.html` (linha ~88)
```html
<h1 class="hero-headline fade-in">
    SUA HEADLINE AQUI
</h1>
```

### Mudar Preço
**Arquivo:** `index.html` (procure por "R$ 197")
- Substitua TODOS os "R$ 197" pelo novo preço
- Ajuste também o valor parcelado

### Ajustar Data do ENEM
**Arquivo:** `script.js` (linha 6)
```javascript
enemDate: new Date('2025-11-09T00:00:00'),
```

## 🧪 Testes A/B Sugeridos

### Teste 1: Headline
```
Versão A: "DESCOBERTO ÀS VÉSPERAS DO ENEM 2025?"
Versão B: "ÚLTIMA CHANCE PARA PASSAR NO ENEM 2025"
Métrica: Taxa de scroll até 50%
```

### Teste 2: Preço
```
Versão A: R$ 197
Versão B: R$ 247
Métrica: Taxa de cliques no CTA principal
```

### Teste 3: Cor do CTA
```
Versão A: Vermelho (#FF4757)
Versão B: Verde (#2ECC71)
Métrica: Taxa de conversão
```

## 📊 Métricas para Acompanhar

### Google Analytics 4
1. **Taxa de Rejeição:** <40% (ideal)
2. **Tempo Médio na Página:** >3 minutos
3. **Scroll Depth:** 75%+ chegam ao final
4. **Taxa de Conversão:** 15-25% (meta)

### Eventos Importantes
- `CTA_click` - Cliques em CTAs
- `scroll_depth_75` - 75% da página
- `payment_click_pix` - Clique no PIX
- `payment_click_card` - Clique no Cartão

## 🐛 Problemas Comuns

### ❌ Countdown não aparece
**Solução:** Verifique JavaScript habilitado + Console (F12)

### ❌ Fontes não carregam
**Solução:** Verifique conexão com Google Fonts

### ❌ Layout quebrado no mobile
**Solução:** Force refresh (Ctrl + Shift + R)

### ❌ Analytics não tracking
**Solução:** Verifique IDs configurados + AdBlocker desabilitado

## 🔧 Otimizações Avançadas

### Comprimir Imagens
```bash
# Se adicionar imagens, use:
npm install -g imagemin-cli
imagemin images/* --out-dir=images/optimized
```

### Minificar CSS/JS
```bash
# Para produção:
npx terser script.js -o script.min.js
npx clean-css-cli styles.css -o styles.min.css
```

### Ativar GZIP
Adicione ao `.htaccess` (Apache):
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

## 📞 Suporte Rápido

**Problema técnico?**
1. Verifique Console do navegador (F12)
2. Teste em modo anônimo
3. Limpe cache (Ctrl + Shift + Delete)
4. Teste em outro navegador

**Dúvidas de configuração?**
- Consulte `README.md` para documentação completa
- Veja `config.js` para todas as opções

## 🎯 Metas de Performance

```
✅ PageSpeed Score: 90+ (mobile e desktop)
✅ First Contentful Paint: <1.5s
✅ Time to Interactive: <3.5s
✅ Cumulative Layout Shift: <0.1
```

**Testar em:** https://pagespeed.web.dev/

## 🚀 Próximos Passos

1. ✅ Configurar Analytics
2. ✅ Deploy inicial
3. ✅ Testes em dispositivos reais
4. ✅ Configurar domínio
5. ✅ Ativar SSL/HTTPS
6. ✅ Configurar redirects
7. ✅ Monitorar métricas
8. ✅ Iterar com A/B tests

---

## 💡 Dica Final

**A página está 100% funcional e pronta para conversão!**

Foque em:
1. Tráfego qualificado (anúncios, SEO, social)
2. Testes contínuos (A/B testing)
3. Análise de métricas (GA4)
4. Otimizações baseadas em dados

**Boa sorte com suas vendas! 🚀🧠**

---

**Links Úteis:**
- 📊 Google Analytics: https://analytics.google.com/
- 📘 Facebook Pixel: https://business.facebook.com/
- ⚡ Vercel: https://vercel.com/
- 🌐 Netlify: https://netlify.com/
- 🔍 PageSpeed: https://pagespeed.web.dev/




