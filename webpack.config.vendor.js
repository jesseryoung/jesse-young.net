var webpack = require('webpack');

module.exports = {
    entry: {
        'vendor': [
            'zone.js',
            'reflect-metadata',
            'rxjs/add/operator/toPromise',
            '@angular/core', 
            '@angular/router-deprecated', 
            '@angular/platform-browser-dynamic', 
            '@angular/http', 
            '@angular2-material/icon', 
            '@angular2-material/card', 
            '@angular2-material/button', 
            '@angular2-material/toolbar', 
            '@angular2-material/list'
        ]
    },
    output: {
        path: './dist/',
        filename: '[name].js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: './dist/[name]-manifest.json',
            name: '[name]_[hash]'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            minimize: true,
            mangle: false // Due to https://github.com/angular/angular/issues/6678
        })
    ]
}