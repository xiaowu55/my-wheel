const { merge } = require("webpack-merge");
const common = require('./webpack.common')
const {resolveApp} = require('./paths')

// 开发环境配置 webpack.dev.js
module.exports = merge(common,{
    mode:'development',
    devtool:'eval-cheap-module-source-map',
    output:{
        // bundle文件名称
        filename:'[name].bundle.js',
        // bundle 文件路径
        path: resolveApp('dist'),
        // 编译前清除目录
        clean:true
    },
    devServer: {
        // 告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要。
        static: {
            directory: resolveApp('dist')
          },
      },
})