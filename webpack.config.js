var webpack = require("webpack");
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// NodeJS中的Path对象，用于处理目录的对象，提高开发效率。
// 模块导入
module.exports = {
    // 入口文件地址，不需要写完，会自动查找
    entry: [
        './src/main.js'
    ],
    // 输出
    output: {
        path: path.join(__dirname, './build'),
        // 文件地址，使用绝对路径形式
        filename: 'main.js',
        //[name]这里是webpack提供的根据路口文件自动生成的名字
        publicPath: '/build/',
        // 公共文件生成的地址
        chunkFilename: '[id].[chunkhash].js'
    },
    // 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        hash:true
    },

    // 加载器
    module: {
        // 加载器
        loaders: [
        // 解析.vue文件
            { test: /\.vue$/, loader: 'vue' },
        // 转化ES6的语法
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        // 编译css并自动添加css前缀
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.styl$/, loader: ['style', 'css', 'stylus']},
        // 图片转化，小于8K自动转化为base64的编码
            { test: /\.(png|jpe?g|gif)$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]'}
        ]
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer',
            html:'html-loader'
        }
    },
    // 转化成es5的语法
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', '.styl', '.css'],
        alias: {
            vue$: 'vue/dist/vue.js',
            src: path.join(__dirname, './src'),
            components: path.join(__dirname, './src/components')
        }
    },
    // 开启source-map，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.resolve(__dirname, './index.html'),
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};


