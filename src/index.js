import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import "./index.css";
import App from "./containers/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { createLogger } from "redux-logger";

import { searchRobots } from "./reducers";
import * as serviceWorker from "./serviceWorker";

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
