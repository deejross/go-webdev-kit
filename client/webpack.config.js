var path = require("path");
var webpack = require("webpack");

var config = {
    entry: [
        "./init.js"
    ],
    devtool: "source-map",
    output: {
        filename: path.join(__dirname, "../public", "js", "build", "build.js")
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["react", "es2015", "stage-0"]
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};

module.exports = config;