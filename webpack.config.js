var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const mainStylesExtract = new ExtractTextPlugin('main.css');
const EXCLUDES = [/node_modules/];

module.exports = {
    context: path.resolve('src'),
    entry: {
        main: './js/main'
    },
    output: {
        path: path.resolve('build/'),
        publicPath: '/build',
        filename: '[name].js'
    },
    devServer: {
        contentBase: 'src'
    },
    plugins: [
        mainStylesExtract
    ],
    module: {
        loaders: [{ // Javascript
            test: /\.js$/,
            exclude: EXCLUDES,
            loader: 'babel-loader'
        }, { // Sass 
            test: /main\.scss$/,
            exclude: EXCLUDES,
            loader: mainStylesExtract.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'autoprefixer-loader'
                }, {
                    loader: 'sass-loader',
                    options: {
                        includePaths: ['./node_modules']
                    }
                }]
            })
        }]
    }
};