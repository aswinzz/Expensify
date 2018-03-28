const path = require('path');
console.log(__dirname);
module.exports = {
    entry : './src/app.js',
    output: {
        path :path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules: [{
            loader:'babel-loader',
            test :/\.js$/,
            exclude:/node_modules/
        },
        {
            test: /\.s?css$/,
            use : [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase :path.join(__dirname,'public'),
        historyApiFallback:true
    },
    resolve:{
        alias: {
            // required for moment to work properly
            moment: 'moment/moment.js',
          }
    },
    performance: { hints: false }
};