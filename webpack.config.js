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
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL':JSON.stringify(process.env.FIREBASE_DATBASE_URL),
                'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            })
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
