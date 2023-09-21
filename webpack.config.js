const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test:  /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env',
                            '@babel/react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader'] 
            }
        ]
    },
    devServer: {
        proxy: {
            '/tickets': 'http://localhost:3000',
        },
        static: {
            publicPath: '/',
            directory: path.resolve(__dirname)
        },
        host: 'localhost',
        port: 8080,
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Development',
            template: 'index.html'
        })
    ]  
}