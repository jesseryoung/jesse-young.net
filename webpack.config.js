var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    entry: './app/main.ts',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devtool: 'source-map',
    
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'raw-loader' }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/vendor-manifest.json')
        })
    ]

};