const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // entry: './src/index.js',
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            // {
            //     test: /\.js$/i,
            //     use: ['babel-loader'],
            //     exclude: /node_modules/,
            //     query: {presets:['es2015']}
            // }
        ],
        // loaders: [
        //     { test: /\.js$/, loader: 'babel-loader', exclude: /node_module/, query: { presets: ['es2015'] } }
        // ],
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: "Webpack Example",
    //     }),
    // ],
    plugins: [
        // new CleanWebpackPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ]
};