var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './app/polyfills.ts',
        vendor: './app/vendor.ts',
        main: './app/main.ts'
    },


    devtool: 'source-map',

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                include:  path.join(__dirname, 'app'),
                loader: 'raw'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]

};