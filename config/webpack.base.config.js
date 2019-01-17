const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

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
    module: {rules: [jsLoader, tsLoader]},
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            filename: './index.html'
        }),
        new webpack.NamedModulesPlugin(),
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
