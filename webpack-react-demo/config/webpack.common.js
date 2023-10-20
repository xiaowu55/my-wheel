const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

// 通用环境配置 webpack.common.js
module.exports = {
    entry:{
        index:'./src/index.js',
    },
    plugins:[
        // 生成html，自动引入所有bundle
        new HtmlWebpackPlugin({
            title:'release_v0'
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module:{
        rules:[
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/i,
                include:paths.appSrc,
                type:'asset/resource'
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                include:[
                    paths.resolveApp('src')
                ],
                type:'asset/resource'
            },
            {
                test:/\.module\.(scss|sass)$/,
                include:[
                    paths.appSrc
                ],
                use:[
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    {
                        loader:'css-loader',
                        options:{
                            //Enable CSS Modules features
                            modules:true,
                            importLoaders:2,
                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader   
                        }
                    },
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                plugins:[
                                    //postcss-preset-env 包含autoprefixer
                                    'postcss-preset-env',
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test:/\.(js|ts|jsx|tsx)$/,
                include:paths.appSrc,
                use:[
                    {
                        loader:'esbuild-loader',
                        options:{
                            loader:'tsx',
                            target:'es2015'
                        }
                    }
                ]
            }
        ]
    }
}