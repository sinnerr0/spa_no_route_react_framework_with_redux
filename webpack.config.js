const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',// release시에는 보안으로 인해 source-map으로 해야 함
    entry: [
        __dirname + '/app/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            use: [
                {loader: 'style-loader'},// style-loader(html에 style추가)
                {loader: 'css-loader', options: {modules: true}}// css-loader(javascript내 import이용하여 css로드하여 class 사용)
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([{from: 'app/data', to: 'data'}]),
        new webpack.DefinePlugin({"process.env.NODE_ENV": JSON.stringify("development")}),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({template: __dirname + '/app/index.html', cache: true})// 기본 index.html template 지정, template loader(jade, ejs등)를 이용하여 html에 template적용 가능
    ],
    devServer: {
        contentBase: __dirname + '/app',
        port: 80,
        historyApiFallback: true,
        https: false,
        inline: true,
        hot: true
    }
};

module.exports = config;