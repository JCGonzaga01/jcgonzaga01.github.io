import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
// Pages
import App from "./App";
import Home from "pages/Home";

const router = (
  <BrowserRouter>
    <App>
      <Route exact path={"/"} component={Home} />
    </App>
  </BrowserRouter>
);

export default router;
