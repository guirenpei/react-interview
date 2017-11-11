const express = require('express');
const app = express();
const config = require('../config/index.js');

app.use('/', require('connect-history-api-fallback')());
app.use('/', express.static(config.staticPath));

if (process.env.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackConfig = require('../config/webpack/webpack.dev.config.js');
    const webpackCompiled = webpack(webpackConfig);
    // 配置运行时打包
    const webpackDevMiddleware = require('webpack-dev-middleware');
    app.use(webpackDevMiddleware(webpackCompiled, {
        publicPath: config.publicPath,
        stats: {colors: true},
        lazy: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
    }));

    // 配置热更新
    const webpackHotMiddleware = require('webpack-hot-middleware');
    app.use(webpackHotMiddleware(webpackCompiled));
}

const server = app.listen(2000, function () {
    const port = server.address().port;
    console.log('Open http://localhost:%s', port);
});
