const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'));
    config.resolve.symlinks(true);
  },
  configureWebpack: {
  },
  // baseUrl: '/',
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        // pathRewrite: {
        //   '^/apis': '',
        // },
      },
    },
  },
};
