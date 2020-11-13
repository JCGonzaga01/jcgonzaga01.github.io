import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Spinner } from "components/_common";
import App from "components/App";
import "./index.scss";

const app = (
  <Suspense fallback={<Spinner />}>
    <App />
  </Suspense>
);

ReactDOM.render(app, document.getElementById("root"));
