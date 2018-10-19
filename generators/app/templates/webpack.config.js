var path = require('path');
var webpack = require('webpack');

var pathToPhaser = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(pathToPhaser, 'dist/phaser.js');

module.exports = {
    entry: './src/boilerplate/game.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },
    module: {
        rules: [{
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /phaser\.js$/,
                loader: 'expose-loader?Phaser'
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        publicPath: '/build/',
        host: '127.0.0.1',
        port: 8080,
        open: true
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            phaser: phaser
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ]
};