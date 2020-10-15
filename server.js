const express = require("express");
const path = require("path");

const app = express();

if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const WebpackDevMiddleware = require("webpack-dev-middleware");
  const webpackConfig = require("./webpack.config.js");
  app.use(WebpackDevMiddleware(webpack(webpackConfig)));
} else {
  // This is for testing the build project view.
  // app.use(express.static("dist"));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "dist/index.html"));
  // });
}

app.listen(process.env.port || 8080, () => console.log("Listening"));
