/**
 * Script para copiar el build del fork a la carpeta del frontend
 * Uso: node scripts/copy-to-frontend.js
 * 
 * Este script copia todos los archivos de dist/ a:
 * lienmaster-frontend/src/features/clinic/marketing/components/lienmaster_email_builder/
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rutas
const projectRoot = path.resolve(__dirname, '..');
const distPath = path.join(projectRoot, 'dist');
const frontendPath = path.resolve(__dirname, '../../lienmaster-frontend/src/features/clinic/marketing/components/lienmaster_email_builder');

function copyDir(src, dest) {
  // Crear directorio destino si no existe
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      // Copiar archivo
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  console.log('📦 Copying lienmaster-email-builder dist to frontend...\n');
  console.log('Source:', distPath);
  console.log('Destination:', frontendPath);

  // Verificar que existe dist
  if (!fs.existsSync(distPath)) {
    console.error('❌ Error: dist folder not found. Run "pnpm run build:lib" first.');
    process.exit(1);
  }

  try {
    // Copiar todo el contenido de dist a la carpeta del frontend
    copyDir(distPath, frontendPath);
    console.log('\n✅ Successfully copied!');
    console.log(`   Files are in: ${frontendPath}`);
  } catch (error) {
    console.error('❌ Error copying files:', error.message);
    process.exit(1);
  }
}

main();
