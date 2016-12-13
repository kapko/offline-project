var HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    path = require('path');
module.exports = {
    context: path.join(__dirname, '/assets/js'),
    entry: {
        vendor: [
            // 'jquery',
            'angular',
            'angular-ui-router',
            // 'angular-cookies',
            'angular-animate',
            'angular-aria',
            'angular-messages',
            // 'ngmap'
        ],
        all: './main.js'
    },
    output: {
        path: path.join(__dirname, '/public/js'),
        filename: '[name].js',
        staticPath: '/',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?name=/[path][name].[ext]?limit=10000"
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style", "css", "less")
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract("style", "css", "sass")
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    devServer: {
        port: 8080,
        inline: true,
        contentBase: './public/'
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/moment[\\\/]lang$/, /^\.\/(en)$/),
        new ExtractTextPlugin("custom.css"),
        // new webpack.ProvidePlugin({
        //     jQuery: 'jquery',
        //     $: 'jquery',
        //     jquery: 'jquery'
        // })
    ]
}
