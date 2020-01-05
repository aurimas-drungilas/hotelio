const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://back-end:8080',
      changeOrigin: true,
    })
  );
};