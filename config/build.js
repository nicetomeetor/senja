import {build} from 'esbuild';
import path from 'path';

const MODE = process.env.MODE;
const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

const isMode = (mode, value) => mode === value;
const isProd = isMode(PRODUCTION, MODE);
const isDev = isMode(DEVELOPMENT, MODE);

await build({
    entryPoints: ['index.jsx'],
    bundle: true,
    outfile: path.resolve('build', 'bundle.cjs'),
    minify: isProd,
    sourcemap: isDev,
    platform: 'node',
})