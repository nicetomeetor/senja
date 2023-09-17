import React from 'react'
import Server from 'react-dom/server'
import useragent from 'useragent';
import Touch from '../build/touch/bundle.cjs';
import Desktop from '../build/desktop/bundle.cjs';

import fastifyStatic from '@fastify/static';

import path from 'node:path';

import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
});

fastify.register(fastifyStatic, {
    root: path.join(__dirname, 'public')
})

fastify.get('/', async function handler (request, reply) {
    const ua = useragent.is(request.headers['user-agent']);


    const isTouch = ua.safari_mobile || ua.android;

    const app = Server.renderToString(isTouch ? <Touch /> : <Desktop />);
    const script = isTouch ? './touch.js' : './desktop.js'

    const html = `
        <html>
            <body>
                <div id="root">${app}</div>
                <script src="${script}"></script>
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