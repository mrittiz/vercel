
import { build } from 'vite';
import { build as esbuild } from 'esbuild';

async function buildApp() {
  console.log('Building client...');
  await build({
    configFile: './vite.config.ts'
  });

  console.log('Compiling server...');
  await esbuild({
    entryPoints: ['server/index.ts'],
    bundle: true,
    platform: 'node',
    target: 'node18',
    format: 'esm',
    outfile: 'dist/index.js',
    external: ['express', 'tsx'],
    allowOverwrite: true
  });

  console.log('Build complete!');
}

buildApp().catch(console.error);
