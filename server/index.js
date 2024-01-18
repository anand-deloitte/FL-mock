// import path from 'path';
// import fs from 'fs';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import express from 'express';

// import App from '../src/App';

// const compression = require('compression');
// const PORT = process.env.PORT || 3050;
// const app = express();

// // const expressStaticGzip = require("express-static-gzip")
// // app.use(expressStaticGzip('build'))

// app.use(compression());
// app.use(express.static('./build'));

// app.get('/', (req, res) => {
//   const app = ReactDOMServer.renderToString(<App />);
//   const indexFile = path.resolve('./build/index.html');

//   fs.readFile(indexFile, 'utf8', (err, data) => {
//     if (err) {
//       console.error('Something went wrong:', err);
//       return res.status(500).send('Oops, better luck next time!');
//     }

//     return res.send(
//       data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
//     );
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const AppServer = require('../src/AppServer').default;
const AppServerNew = require('../src/AppServerNew').default;

const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

// app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  const content = ReactDOMServer.renderToString(<AppServer />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});

app.get('/new', (req, res) => {
  const content = ReactDOMServer.renderToString(<AppServerNew />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});