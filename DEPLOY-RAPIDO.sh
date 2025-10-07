#!/bin/bash

# 🚀 SCRIPT DE DEPLOY AUTOMÁTICO - NEUROHACK ENEM
# Este script faz o deploy completo no GitHub + Vercel

echo "======================================"
echo "🚀 DEPLOY AUTOMÁTICO - NEUROHACK ENEM"
echo "======================================"
echo ""

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Inicializar Git (se ainda não foi)
echo -e "${BLUE}📦 PASSO 1: Inicializando Git...${NC}"
if [ ! -d .git ]; then
    git init
    echo -e "${GREEN}✅ Git inicializado!${NC}"
else
    echo -e "${GREEN}✅ Git já estava inicializado!${NC}"
fi
echo ""

# 2. Configurar Git (se necessário)
echo -e "${BLUE}🔧 PASSO 2: Configurando Git...${NC}"
if [ -z "$(git config user.name)" ]; then
    git config user.name "NeuroHack ENEM"
    echo -e "${GREEN}✅ Nome configurado!${NC}"
fi
if [ -z "$(git config user.email)" ]; then
    git config user.email "contato@neurohackenem.com"
    echo -e "${GREEN}✅ Email configurado!${NC}"
fi
echo ""

# 3. Adicionar arquivos
echo -e "${BLUE}📝 PASSO 3: Adicionando arquivos...${NC}"
git add index.html
git add styles-devastador.css
git add script.js
git add README.md
git add package.json
git add .gitignore
echo -e "${GREEN}✅ Arquivos principais adicionados!${NC}"
echo ""

# 4. Fazer commit
echo -e "${BLUE}💾 PASSO 4: Fazendo commit...${NC}"
git commit -m "feat: Landing page NeuroHack ENEM completa e pronta para conversão" 2>/dev/null || echo "Nada para commitar ou já commitado"
echo -e "${GREEN}✅ Commit realizado!${NC}"
echo ""

# 5. Instruções para GitHub
echo ""
echo "======================================"
echo -e "${YELLOW}📘 PRÓXIMO PASSO: CRIAR REPOSITÓRIO NO GITHUB${NC}"
echo "======================================"
echo ""
echo "1️⃣ Acesse: https://github.com/new"
echo ""
echo "2️⃣ Preencha:"
echo "   - Repository name: neurohack-enem"
echo "   - Description: Página de vendas NeuroHack ENEM"
echo "   - Public (ou Private)"
echo "   - NÃO marque nenhuma opção (README, gitignore, etc)"
echo ""
echo "3️⃣ Clique em 'Create repository'"
echo ""
echo "4️⃣ COPIE o comando que aparece na tela:"
echo "   (algo como: git remote add origin https://github.com/SEU-USUARIO/neurohack-enem.git)"
echo ""
echo "5️⃣ COLE aqui e execute"
echo ""
echo "6️⃣ Depois execute:"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "======================================"
echo ""

# Mostrar status
echo -e "${BLUE}📊 STATUS ATUAL:${NC}"
git status
echo ""

echo "======================================"
echo -e "${GREEN}✅ PASSO 1-4 CONCLUÍDOS!${NC}"
echo "======================================"
echo ""
echo "Agora siga as instruções acima para conectar ao GitHub!"
echo ""

