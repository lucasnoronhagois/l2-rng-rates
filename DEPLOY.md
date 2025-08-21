# 🚀 Guia de Deploy - L2 RNG Simulator

## Deploy no Vercel

### Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Projeto no GitHub/GitLab/Bitbucket
3. Node.js 18+ instalado localmente

### Método 1: Deploy Automático (Recomendado)

1. **Conecte seu repositório**:
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe seu repositório

2. **Configure o projeto**:
   - **Framework Preset**: `Node.js`
   - **Root Directory**: `./` (padrão)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Deploy**:
   - Clique em "Deploy"
   - Aguarde o build e deploy automático

### Método 2: Deploy via CLI

1. **Instale o Vercel CLI**:
```bash
npm i -g vercel
```

2. **Faça login**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Para produção**:
```bash
vercel --prod
```

### Configurações Importantes

#### Variáveis de Ambiente (Opcional)
No painel do Vercel, configure:
- `NODE_ENV`: `production`
- `PORT`: `3000` (automático)

#### Domínio Personalizado
1. Vá para as configurações do projeto no Vercel
2. Clique em "Domains"
3. Adicione seu domínio personalizado

### Estrutura de Arquivos para Deploy

```
l2-rng-rates/
├── src/
│   ├── backend/
│   │   └── server.js          # Servidor principal
│   └── frontend/
│       ├── components/
│       ├── public/            # Imagens
│       ├── App.jsx
│       ├── main.jsx
│       └── index.html
├── package.json
├── vercel.json               # Configuração do Vercel
├── build.js                  # Script de build
└── .vercelignore            # Arquivos ignorados
```

### Troubleshooting

#### Erro de Build
- Verifique se todas as dependências estão no `package.json`
- Confirme se o Node.js versão 18+ está sendo usado
- Verifique os logs de build no painel do Vercel

#### Erro de Runtime
- Verifique se o servidor está exportando corretamente
- Confirme se as rotas estão configuradas no `vercel.json`
- Verifique os logs de função no painel do Vercel

#### Imagens não carregam
- Confirme se as imagens estão na pasta `src/frontend/public/`
- Verifique se os caminhos estão corretos no código
- Teste localmente antes do deploy

### Comandos Úteis

```bash
# Build local para teste
npm run build

# Preview local
npm run preview

# Deploy de desenvolvimento
vercel

# Deploy de produção
vercel --prod

# Ver logs
vercel logs

# Remover deploy
vercel remove
```

### Monitoramento

Após o deploy, monitore:
- **Performance**: Métricas de tempo de resposta
- **Erros**: Logs de erro no painel do Vercel
- **Uso**: Estatísticas de uso das funções
- **Domínio**: Status do domínio personalizado

### Atualizações

Para atualizar o projeto:
1. Faça push para o repositório
2. O Vercel fará deploy automático
3. Ou use `vercel --prod` para deploy manual

### Suporte

- [Documentação do Vercel](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Status do Vercel](https://vercel-status.com)
