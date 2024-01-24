import { StaticRouter } from "react-router-dom/cjs/react-router-dom.min";
import routes from "../src/Shared/routes";
import { matchPath } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { createServerStore } from "../src/util/createStore";
const express = require("express");
const React = require("react");
const { Provider } = require('react-redux');
const { createMemoryHistory } = require('history');
const ReactDOMServer = require("react-dom/server");
const ConnectedRouter = require('connected-react-router');
const serialize = require("serialize-javascript");
const AppPage = require("../src/Shared/AppPage").default;
// const createStore = require('../src/store'); 
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
// const history = createMemoryHistory();

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("*", (req, res, next) => {
  const history = createMemoryHistory({
    initialEntries: [encodeURI(req.url)] // encodeURI sanitizes the url before storing it
  });
	const initialState = {};
  const store = createServerStore(
		initialState,
		history,
	);
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then((data) => {
      const context = {data};
      const content = ReactDOMServer.renderToString(
        <Provider store={store}>
             <ConnectedRouter history={history}>
                <p>test server </p>
                <AppPage />
              </ConnectedRouter>
        </Provider>
       
      );
      const html = `
                  <!DOCTYPE html>
                  <html lang="en">
                    <head>
                      <meta charset="UTF-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <title>React SSR</title>
                      <script src="/bundle.js" defer></script>
                      <script>window.__INITIAL_DATA__ = ${serialize(
                        data
                      )}</script>
                    </head>
                    <body>
                      <div id="root">${content}</div>
                    </body>
                  </html>
                `;
      res.send(html);
    })
    .catch(next);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
