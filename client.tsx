import React from "react";
import { render } from "react-dom";

import App from "./layouts/App";
import { BrowserRouter } from "react-router-dom";
import "@lang/i18n";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#app"),
);
