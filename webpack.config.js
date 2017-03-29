var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: ['webpack/hot/dev-server', __dirname + '/app/main.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    module: {
        //loaders加载器
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
             {
                  test: /\.css$/,
                  loaders: ['style', 'css']
              }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin();
    ],

    //webpack-dev-server配置
    devServer: {
        contentBase: './build',
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 8083,
        process: true
    }
};