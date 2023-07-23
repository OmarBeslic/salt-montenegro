import React from "react";
//
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
//
import { Provider } from "react-redux";
import { store } from "./app/store/store";
//
import { HelmetProvider } from "react-helmet-async";
//
import "./i18n";
import App from "./App";
import ScrollToTop from "./hoc/web/ScrollToTop";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <HelmetProvider>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </HelmetProvider>
);
