const path = require('path');
console.log(__dirname);
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (env) => {
    const CSSExtract = new ExtractTextPlugin('style.css');
    const isProduction = env==='production';
    return {
        entry : './src/app.js',
        output: {
            path :path.join(__dirname,'public','dist'),
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
                use : CSSExtract.extract({
                    use: [{
                        loader:'css-loader',
                        options:{
                            sourceMap:true
                        }
                    },{
                        loader:'sass-loader',
                        options:{
                            sourceMap:true
                        }
                    }]
                })
            }
        ]
        },
        plugins : [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase :path.join(__dirname,'public'),
            historyApiFallback:true,
            publicPath:'/dist/'
        },
        resolve:{
            alias: {
                // required for moment to work properly
                moment: 'moment/moment.js',
            }
        },
        performance: { hints: false }
    };
};
