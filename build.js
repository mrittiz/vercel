
import { build } from 'vite';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function buildApp() {
  console.log('Building client...');
  await build({
    configFile: './vite.config.ts'
  });

  console.log('Compiling server...');
  await execAsync('npx tsc server/index.ts --outDir dist/server --target es2020 --module esnext --moduleResolution bundler --allowImportingTsExtensions false --declaration false --esModuleInterop true --skipLibCheck true');

  console.log('Build complete!');
}

buildApp().catch(console.error);
