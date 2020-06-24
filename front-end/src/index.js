import "./index.css";
import React from "react";
// import logger from "redux-logger";
import ReactDOM from "react-dom";
import App from "./App";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { reducer } from "./store/reducers/reducers";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
