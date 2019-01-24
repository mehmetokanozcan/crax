const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('vendor.css');
const extractSASS = new ExtractTextPlugin('style.css');
const CopyWebpackPlugin = require('copy-webpack-plugin');

require('@babel/polyfill');

hydrateEnvironmentConf = (env) => {
    const environmentsPath = path.resolve(__dirname, '..', 'src', 'environments');
    let localEnvConf = {};
    if (env === 'development') {
        localEnvConf = dotenv.config({path: `${environmentsPath}/.env.local`}).parsed;
    }
    const currentEnvConf = dotenv.config({path: `${environmentsPath}/.env.${env}`}).parsed;
    const globalEnvConf = dotenv.config().parsed;
    const conf = {...globalEnvConf, ...currentEnvConf, ...localEnvConf}
    const envKeys = Object.keys(conf).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(conf[next]);
        return prev;
    }, {});

    return new webpack.DefinePlugin(envKeys);
};

const entryPoint = process.env.NODE_ENV === 'development' ? '../src/index.tsx' : '../src/krax/index.ts';
const libraryTarget = process.env.NODE_ENV === 'development'
    ? {}
    : {libraryTarget: 'commonjs2'};

const targetnMode = process.env.NODE_ENV === 'development'
    ? {}
    : {target: 'node', mode: process.env.NODE_ENV};

let entry = ['@babel/polyfill', path.resolve(__dirname, entryPoint)];

if (process.env.NODE_ENV === 'development') {
    entry = [
        ...entry,
        'webpack-dev-server/client?http://localhost:8001',
        'webpack/hot/only-dev-server',
    ]
}

const jsLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader'
    }
};

const tsLoader = {
    test: /\.tsx?$/,
    use: {
        loader: 'ts-loader'
    }
};

/*const cssLoader = {
    test: /\.css$/,
    // use: ['style-loader', 'css-loader'],
    use: [
        {
            loader: 'style-loader',
        },
        {
            loader: 'css-loader',
            query: {
                // modules: true,
                sourceMap: true,
                importLoaders: 1,
            }
        }
    ]
};*/

const cssLoader = {
        test: /\.css$/,
        use: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}}],
    };

module.exports = {

    entry: entry,
    output: {
        path: path.resolve(__dirname, '..', 'lib'),
        filename: 'index.js',
        ...libraryTarget
    },
    ...targetnMode,
    devtool: "source-map",
    resolve: {extensions: [".ts", ".tsx", ".js", ".json"]},
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            /*{
                test: /\.css$/,
                use: extractCSS.extract({
                    use: [{
                        loader: 'css-loader',
                        query: {
                            modules: false,
                            // localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }]
                })
            },
            {
                test: /\.scss$/,
                use: extractSASS.extract({
                    use: [{
                            loader: 'css-loader',
                            query: {
                                modules: false,
                                sourceMap: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [
                                    path.resolve(__dirname, '..', 'src/styles/'),
                                    path.resolve(__dirname, '..', 'src/app/components/styles')
                                ]
                            }
                        }
                    ]
                })
            },*/
            {
                test: /\.css$/,
                use: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}}],
            }
            /*{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }*/
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin("css/style.css"),
        /*extractCSS,
        extractSASS,*/
        new webpack.NamedModulesPlugin(),
        new CopyWebpackPlugin([
            { from: './src/krax/index.d.ts', to: './' }
        ]),
        hydrateEnvironmentConf(process.env.NODE_ENV),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            })
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, '..', 'src/public'),
        port: 8001,
        hot: true
    }
};
