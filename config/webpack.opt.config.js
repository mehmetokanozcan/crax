const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true,
                    },
                },
            })
        ],
    }
}
