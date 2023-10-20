const fs = require('fs'); // 引入 Node.js 的文件系统模块
const path = require('path'); // 引入 Node.js 的路径处理模块

// 使用 fs.realpathSync 获取当前 Node.js 进程的工作目录的真实路径
const appDirectory = fs.realpathSync(process.cwd());

// 定义一个函数 resolveApp，用于生成项目中不同目录的绝对路径
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

// 导出一个对象，其中包含不同目录的绝对路径
module.exports = {
  resolveApp,
  appPublic: resolveApp('public'), // 项目中 public 目录的绝对路径
  appHtml: resolveApp('public/index.html'), // public 目录下的 index.html 文件的绝对路径
  appSrc: resolveApp('src'), // 项目中 src 目录的绝对路径
  appDist: resolveApp('dist'), // 项目中 dist 目录的绝对路径
  appTsConfig: resolveApp('tsconfig.json'), // 项目中 tsconfig.json 文件的绝对路径
};
