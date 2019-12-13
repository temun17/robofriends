import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import "./index.css";
import App from "./containers/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { createLogger } from "redux-logger";

import { searchRobots, requestRobots } from "./reducers";
import * as serviceWorker from "./serviceWorker";

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
