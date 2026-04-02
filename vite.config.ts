import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import react from '@vitejs/plugin-react-swc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => {
  const isLibrary = mode === 'library';

  if (isLibrary) {
    // 库模式配置 - 只构建库代码，不包含开发预览代码
    return {
      plugins: [react()],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'EmailBuilder',
          fileName: 'index',
          formats: ['en'],
        },
        rollupOptions: {
          external: (id) => {
            // 明确列出需要外部化的依赖（优先匹配）
            const explicitExternals = [
              'react',
              'react-dom',
              '@mui/material',
              '@mui/icons-material',
              '@emotion/react',
              '@emotion/styled',
              'react-syntax-highlighter',
            ];

            // 检查是否匹配明确列出的依赖
            if (explicitExternals.some(dep => id === dep || id.startsWith(`${dep}/`))) {
              return true;
            }

            // 规范化路径用于比较（处理不同操作系统的路径分隔符）
            const normalizedId = id.replace(/\\/g, '/');
            const srcDir = resolve(__dirname, 'src').replace(/\\/g, '/');

            // 如果在 src 目录下，是内部模块，不能被 external
            if (normalizedId.startsWith(srcDir) || normalizedId.includes('/src/')) {
              return false;
            }

            // 外部化非相对路径（通常是 node_modules）
            if (!id.startsWith('.') && !id.startsWith('/')) {
              return true;
            }

            return false;
          },
          output: {
            format: 'es',
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
            // 代码分割策略：将不同模块分离到独立的 chunk，减小单文件大小
            manualChunks: (id) => {
              // CodeMirror 相关依赖分离
              if (
                id.includes('@uiw/react-codemirror') ||
                id.includes('@codemirror/') ||
                id.includes('@uiw/codemirror-themes-all')
              ) {
                return 'codemirror';
              }

              // 示例模板分离
              if (id.includes('getConfiguration/sample/')) {
                return 'samples';
              }
            },
          },
        },
        minify: 'esbuild',
        esbuild: {
          drop: ['console', 'debugger'],
        },
        cssCodeSplit: true,
        chunkSizeWarningLimit: 1000,
      },
    };
  }

  // 开发/预览模式配置 - 使用 docs 文件夹作为开发预览
  return {
    plugins: [react()],
    root: resolve(__dirname, 'docs'),
    // 支持通过环境变量设置 base 路径（用于 GitHub Pages）
    base: process.env.VITE_BASE_PATH || '/',
    resolve: {
      alias: {
        // 使用本地源码进行调试
        // 'monto-email-block-socials': resolve(__dirname, 'monto-email-block-socials/src'),
        // 'monto-email-core': resolve(__dirname, 'monto-email-core/src'),
        // 'monto-email-block-text': resolve(__dirname, 'monto-email-block-text/src'),
        // 'monto-email-block-columns-container': resolve(__dirname, 'block-columns-container/src'),
      },
    },
    build: {
      outDir: resolve(__dirname, 'docs-dist'),
      emptyOutDir: true,
    },
  };
});
