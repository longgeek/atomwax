const path = require('path')
module.exports = {
    css: {
        extract: true
    },
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    outputDir: process.env.VUE_APP_OUTPUT_PATH,
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    assetsDir: "res",
    indexPath: "index.html",
    // 打包优化
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'development') {
            // 为开发环境修改配置...
            config.devtool = 'source-map';
        }
    },
    devServer: {
        overlay: {                                  // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        host: "localhost",
        port: 8080,                                 // 端口号
        open: false,                                // 配置后自动启动浏览器
        hotOnly: true,                              // 热更新
        contentBase:path.join(__dirname, 'public'),
    },
}
