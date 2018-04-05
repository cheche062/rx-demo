const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier');



module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: [path.resolve('src')],
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(), new WebpackNotifierPlugin()],
    resolve: {
        modules: [
            path.resolve('node_modules'),
            path.resolve('src')
        ]
    }
}
