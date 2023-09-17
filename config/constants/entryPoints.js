import path from 'node:path';

export const INDEX_JSX = 'index.jsx';

export const SERVER_ENTRY_POINT = path.resolve('server', INDEX_JSX);
export const CLIENT_ENTRY_POINT = path.resolve('client', INDEX_JSX);

export const HYDRATION_TOUCH_ENTRY_POINT = path.resolve('hydration', 'index.touch.jsx');
export const HYDRATION_DESKTOP_ENTRY_POINT = path.resolve('hydration', 'index.desktop.jsx');