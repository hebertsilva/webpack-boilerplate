
// ## Config webpack

var webpack = require('webpack');

var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

var path = require('path');
var basePath =  __dirname;
var srcPath = basePath + '/src/';
var nodeModulesDir = path.join(basePath, 'node_modules');

var config = {
	context: srcPath,
	
	profile: true,

	entry: {
        common: 'app/common',
        home: 'app/home'
	},

	output: {
    	path: srcPath + 'js/build/',
    	filename: '[name].js',
        chunkFilename: '[id].js'
  	},

  	plugins: [
        new CommonsChunkPlugin({
            name: 'commons',
            // filename: 'commons.[chunkhash].js',
            filename: 'commons.js',
            minChunks: 2,
            chunks: [
                'common',
            ]
        }),
  		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        new CommonsChunkPlugin("commons.js")
  	],

  	resolve: {
        extensions: ["", ".js"],
        modulesDirectories: [
            "node_modules",
            srcPath + "js",
            srcPath + "js/libs",
            srcPath + "js/app"
        ],

        alias: {}
    },

    resolveLoader: {
        modulesDirectories: [
            nodeModulesDir
        ]
    },

  	module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /(node_modules)/,
                query: {
                    // "presets": ["stage-1", "es2015", "react"], // testar quando atualizar babel
                    optional: ["runtime", "es7.decorators", "es7.classProperties"],
                    cacheDirectory: true
                }
            }
        ],

        noParse: [],
    }
};

module.exports = config;
