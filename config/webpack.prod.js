const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm


module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        filename: "js/[name].[chunkhash:16].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            minify: {
                html5: true
            },
            hash: false
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: "vendor",
                    name: "vendor"
                }
            }
        }
    }
});