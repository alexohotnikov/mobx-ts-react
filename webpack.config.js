var path = require('path');

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
    }
}