const express = require('express');
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve Next.js pages
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;
    handle(req, res, parsedUrl);
  });

  // Start the Express server
  const port = 80;
  server.listen(port, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});