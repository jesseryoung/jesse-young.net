var webpack = require('webpack');

module.exports = {
    entry: './app/main.ts',
    output: {
        path: 'dist',
        filename: 'bundle.js'
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
            context: '.',
            manifest: require('./dist/vendor-manifest.json')
        })
    ]

};