const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier');


let htmlPlugins = new HtmlWebpackPlugin({
    template: './src/index.html'
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: [path.resolve('src')],
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [htmlPlugins, new WebpackNotifierPlugin()],
    resolve: {
        modules: [
            path.resolve('node_modules'),
            path.resolve('src')
        ]
    }
}
