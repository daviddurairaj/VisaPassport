const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://sandbox.api.visa.com',
      changeOrigin: true,
      "pathRewrite": {
        "^/api" : ""
      }
    })
  );
}; 

