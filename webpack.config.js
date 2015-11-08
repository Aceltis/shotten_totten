var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        javascript: path.resolve(__dirname, 'src/app.jsx'),
        html: path.resolve(__dirname, 'src/index.html')
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            // JSX
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react']
            },
            // LESS
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            // Files (Fonts)
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            },
            // Copy html to dist
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};