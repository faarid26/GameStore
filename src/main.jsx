import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "./Responsive.css";
import Reducer from "./store/reducer";
import { legacy_createStore } from "redux";
const store = legacy_createStore(Reducer);
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
