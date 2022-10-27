const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/signin", {
      target: "http://localhost:8081",
      changeOrigin: true,
    })
  );
};
