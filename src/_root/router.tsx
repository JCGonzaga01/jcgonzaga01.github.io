import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
// Pages
import App from "./App";
import Home from "pages/Home";
import AboutMe from "pages/AboutMe";

const router = (
  <BrowserRouter>
    <App>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/aboutMe"} component={AboutMe} />
    </App>
  </BrowserRouter>
);

export default router;
