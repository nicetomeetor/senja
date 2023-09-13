import * as React from 'react'
import * as Server from 'react-dom/server'
import App from './src/App';

console.log(Server.renderToString(<App />))