var webpack = require("webpack");
var path = require('path');

module.exports = {
   
    entry: './src/main.js',
  
    output: {
        path: path.join(__dirname, './dist'),
       
        filename: '[name].js',
       
        publicPath: '/dist/'
       
    },
    module: {
    
        loaders: [
      
            { test: /\.vue$/, loader: 'vue' },
       
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
       
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
     
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},

            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'}
        ]
    },

    vue: {
        loaders: {
            css: 'style!css!autoprefixer!sass?sourceMap'
        }
    },

    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
    
        extensions: ['', '.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.js',
            src: path.join(__dirname, './src'),
            components: path.join(__dirname, './src/components')
        }
    }
};


