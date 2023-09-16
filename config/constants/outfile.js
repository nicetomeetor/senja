import path from 'node:path';

export const SERVER_OUTFILE = path.resolve('build', 'server', 'bundle.cjs'); 
export const TOUCH_OUTFILE = path.resolve('build', 'touch', 'bundle.cjs'); 
export const DESKTOP_OUTFILE = path.resolve('build', 'desktop', 'bundle.cjs'); 

export const TOUCH = 'touch';
export const DESKTOP = 'desktop';