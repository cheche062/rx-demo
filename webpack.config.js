const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier');
const webpack = require('webpack');






module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: [path.resolve('src')],
            use: ['style-loader', 'css-loader']
        }]
    },
    devServer: {
        hot: false,
        disableHostCheck: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new WebpackNotifierPlugin()
    ],
    resolve: {
        modules: [
            path.resolve('node_modules'),
            path.resolve('src')
        ],
        extensions: [".js", ".json", ".jsx", ".css"], // 用到的文件的扩展
    }
}
