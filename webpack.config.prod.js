const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    mode: 'production',
    // devtool: 'source-map',
    entry: [__dirname + '/app/index.js'],
    output: {path: __dirname + '/dist', filename: 'bundle.js'},
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{from: '**/*', to: 'data', context: 'app/data'}]),
        new HtmlWebpackPlugin({template: __dirname + '/app/index.html', cache: true}),
    ]
};

module.exports = config;