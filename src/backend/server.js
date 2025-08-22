import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Carregar variáveis de ambiente
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos do frontend (produção)
if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, '../../dist')));
} else {
  // Desenvolvimento
  app.use(express.static('src/frontend'));
}

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'Servidor L2 RNG Rates funcionando!' });
});

// Rota de teste da API
app.get('/api/test', (req, res) => {
  res.json({ 
    message: 'API funcionando!',
    timestamp: new Date().toISOString()
  });
});

// Rota para servir o React app em produção
if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
}

// Iniciar servidor apenas se não estiver no Vercel
if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
  });
}

// Exportar para Vercel
export default app;
