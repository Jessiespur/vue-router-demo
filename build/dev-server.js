require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')// 自动打开浏览器，打开url地址
var path = require('path')// 处理路径相关  node内置模块
var express = require('express')// node框架，快速搭建一个node服务
var webpack = require('webpack')// 直接作为一个模块使用
var proxyMiddleware = require('http-proxy-middleware')// http代理的中间件
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser// 在启动应用时自动打开浏览器
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable// 跨域时设置目标服务的信息，前后台交互时设置，index.js里设置

var app = express()// express执行，返回一个对象app，通过app这个对象开启服务
var compiler = webpack(webpackConfig)// 执行webpackConfig文件，返回compiler给下面的webpack-dev-middleware中间件使用

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,// 访问静态目录的文件
  quiet: true// 在控制台里可以输出任何东西
})//  浏览器在访问url时，访问了localhost下的html页和app.js，这个url在项目中实际上是不存在的，访问的是内存中的html,就是通过devMiddleware处理过的。

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})// 热加载，在浏览器运行时进行热更新
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})// 在改变模板index.html文件时进行热更新

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})// 获取代理的信息，获取完后传入到proxyMiddleware组件里就可以做代理了

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())// 把路由设置成history时，再去请求某个路由下面视图的时候，可能会请求不到，用connect-history-api-fallback去解决这个问题

// serve webpack bundle output，使用下面两个中间件
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))// 设置静态资源访问的路径

var uri = 'http://localhost:' + port// 设置uri,eg:localhost:8080

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})//  申明变量_resolve，异步加载模块，readyPromise，成功后的回调放到_resovle里面

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {// 将打包后的文件放到内存中，如果打包后的文件都通过了，则会执行回调
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
