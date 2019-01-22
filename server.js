const express = require('express');
const { join } = require('path');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handleRequest = app.getRequestHandler();

app
  .prepare()
  .then(() => {

    const server = express();

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('Server is running on http://localhost:3000');
    });

    server.get('*', (req, res) => handleRequest(req, res));

  });