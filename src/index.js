import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "normalize.css";
import "@/assets/css/index.less";
import "antd/dist/antd.less";

import store from "./store";
import theme from "./assets/theme";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
);
