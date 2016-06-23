
// ## Config webpack

var webpack = require('webpack');

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
    	filename: 'app.bundle.js'
  	},

  	plugins: [
  		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
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
