const { merge } = require("webpack-merge");
const common = require('./webpack.common')
const {resolveApp} = require('./paths')
// 生产环境配置 webpack.prod.js
module.exports = merge(common,{
    mode:'production',
    output:{
        // bundle 文件名称 【只有这里和开发环境不一样】,
        // [name] - chunk name（例如 [name].js -> app.js）。如果 chunk 没有名称，则会使用其 id 作为名称
        // [contenthash] - 输出文件内容的 md4-hash
        filename:'[name].[contenthash].bundle.js',
        // bundle文件路径
        path:resolveApp('dist'),
        clean:true
    }
})