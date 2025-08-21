import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Iniciando build para Vercel...');

try {
  // Build do frontend
  console.log('📦 Buildando frontend...');
  execSync('npm run build:frontend', { stdio: 'inherit' });
  
  // Build do backend
  console.log('⚙️ Buildando backend...');
  execSync('npm run build:backend', { stdio: 'inherit' });
  
  // Copiar arquivos estáticos para o dist
  console.log('📁 Copiando arquivos estáticos...');
  const publicDir = path.join(__dirname, 'src/frontend/public');
  const distDir = path.join(__dirname, 'dist');
  
  if (fs.existsSync(publicDir)) {
    // Usar comando compatível com Windows
    const isWindows = process.platform === 'win32';
    if (isWindows) {
      execSync(`xcopy "${publicDir}\\*" "${distDir}\\" /E /I /Y`, { stdio: 'inherit' });
    } else {
      execSync(`cp -r ${publicDir}/* ${distDir}/`, { stdio: 'inherit' });
    }
  }
  
  console.log('✅ Build concluído com sucesso!');
} catch (error) {
  console.error('❌ Erro no build:', error);
  process.exit(1);
}
