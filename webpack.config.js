var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".ts", "tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 3000,
    hotOnly: true,
    liveReload: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "MobX is amazing?",
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
