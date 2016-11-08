var path = require("path");

var config = {
    entry: [
        "./init.ts"
    ],
    devtool: "source-map",
    output: {
        filename: path.join(__dirname, "../public", "js", "build", "build.js")
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};

module.exports = config;