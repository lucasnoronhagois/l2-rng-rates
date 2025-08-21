# L2 RNG Simulator

Simulador de RNG (Random Number Generator) baseado nas taxas reais do Lineage 2. Teste sua sorte com chances personalizáveis ou predefinidas!

## 🎯 Funcionalidades

- **🎲 Simulador RNG**: Teste chances personalizáveis de 0% a 100%
- **🎮 Chances Predefinidas**: Botões com taxas reais do L2 (enchant, drops, critical, etc.) incluindo imagens dos books
- **📊 Estatísticas**: Acompanhe sucessos, falhas e taxa de sucesso em tempo real
- **📈 Histórico**: Veja as últimas 20 tentativas com detalhes
- **🔄 Reset**: Limpe todas as estatísticas para começar novamente

## Estrutura do Projeto

```
src/
├── backend/     # Código do servidor Node.js/Express
│   └── server.js
└── frontend/    # Código do frontend React
    ├── components/
    │   └── RNGSimulator.jsx  # Componente principal do simulador
    ├── index.html
    ├── main.jsx
    └── App.jsx
```

## Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
PORT=3000
NODE_ENV=development
```

## Scripts Disponíveis

- `npm start` - Inicia o servidor em produção
- `npm run dev` - Inicia o servidor backend em modo desenvolvimento
- `npm run dev:frontend` - Inicia o frontend React com Vite
- `npm run dev:full` - Inicia backend e frontend simultaneamente
- `npm run build` - Compila o código backend com Babel
- `npm run build:frontend` - Compila o frontend React
- `npm run preview` - Visualiza o build do frontend

## Tecnologias Utilizadas

- **Backend**: Node.js, Express, Babel
- **Frontend**: React, Vite, Bootstrap
- **Ferramentas**: Nodemon, Axios, CORS, Dotenv, Concurrently

## Como Usar

### Desenvolvimento Completo (Recomendado)
1. Execute backend e frontend simultaneamente:
```bash
npm run dev:full
```

2. Acesse:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

### Desenvolvimento Separado
1. Execute apenas o backend:
```bash
npm run dev
```

2. Em outro terminal, execute o frontend:
```bash
npm run dev:frontend
```

## Rotas da API

- `GET /` - Rota de teste
- `GET /api/test` - Teste da API

## 🚀 Deploy no Vercel

### Deploy Automático

1. Conecte seu repositório GitHub ao Vercel
2. O Vercel detectará automaticamente as configurações
3. O projeto será buildado e deployado automaticamente

### Deploy Manual

1. Instale o Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login no Vercel:
```bash
vercel login
```

3. Deploy do projeto:
```bash
vercel
```

4. Para produção:
```bash
vercel --prod
```

### Configurações do Vercel

- **Framework Preset**: Node.js
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Teste Local

Antes do deploy, teste localmente:

```bash
# Build do projeto
npm run build

# Preview do build
npm run preview
```

### Variáveis de Ambiente (Opcional)

No painel do Vercel, você pode configurar:
- `NODE_ENV`: `production`
- `PORT`: `3000` (automático)
