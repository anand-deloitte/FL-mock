const React = require("react");
const express = require("express");
const {renderToString} = require("react-dom/server");
const Server = require('../Views/Server').default;

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;

const path = require("path");

app.get("*", (req, res , next) => {
  const content = renderToString(<Server props={req} />);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR Rendering</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(html);
});

router.use(express.static(path.resolve(__dirname, '../build')));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

