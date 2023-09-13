import * as React from 'react'
import * as Server from 'react-dom/server'
import * as App from './src/App';


import * as Fastify from 'fastify';

const fastify = Fastify({
  logger: true
})

fastify.get('/', async function handler (request, reply) {
    const app = Server.renderToString(<App />);

    const html = `
        <html>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `

    reply.status(200).type('text/html').send(html)
})

try {
    fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }