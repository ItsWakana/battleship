const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(svg|jpg|png|gif|ogg|mp3|wav)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/[name][ext]'
                }
              }
        ]
    }
}