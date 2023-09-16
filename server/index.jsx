import React from 'react'
import Server from 'react-dom/server'
import useragent from 'useragent';
import TOUCH from '../build/touch/bundle.cjs';
import DESKTOP from '../build/desktop/bundle.cjs'

import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
});

fastify.get('/', async function handler (request, reply) {
    const ua = useragent.is(request.headers['user-agent']);

    let app;

    if (ua.safari_mobile || ua.android) {
        app = Server.renderToString(<TOUCH />);
    } else {
        app = Server.renderToString(<DESKTOP />);
    }

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