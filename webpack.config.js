var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 3000,
        hotOnly: true,
        liveReload: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MobX is amazing?',
        }),
    ]
}