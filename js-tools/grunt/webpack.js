var webpack = require("webpack");
var assign = require("object-assign");
var Clean = require('clean-webpack-plugin');
var BundleTracker  = require('webpack-bundle-tracker');
var Md5Hash = require("webpack-md5-hash");
var webpackConfig = require("../webpack/webpack.config.js");
var StatsPlugin = require('stats-webpack-plugin');
var options = require("../options.js");
var moment = require("moment");

var path = require('path');
var basePath =  __dirname + "/../../";
var staticPath = basePath + "/static/";
var jsPath = staticPath + "js/";

function getDistConfig(env) {
    var publicPath = options[env] ? options[env].STATIC_URL : "/static/";
    return {
        plugins: webpackConfig.plugins.concat(
            new Clean(['build/'+env], jsPath),
            new Md5Hash(),
            new BundleTracker({
                path: staticPath + "js/stats", filename: (env+'.json')
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {warnings: false},
                output: {comments: false}
            }),
            new webpack.DefinePlugin({
                'process.env': {NODE_ENV: JSON.stringify("production")},
                '__BUILD_TIME__': JSON.stringify("Build time: " + moment().format("DD/MM/YYYY HH:mm:ss"))
            })
        ),
        output: assign({}, webpackConfig.output, {
            publicPath: publicPath + "js/build/"+env+"/",
            path: staticPath + "js/build/" + env,
        })
    }
}

var devPlugins = webpackConfig.plugins.concat(
    new BundleTracker({
        path: staticPath + "js/stats", filename: 'development.json'
    }),
    new Clean(['build/development'], jsPath),
    new webpack.DefinePlugin({
        '__BUILD_TIME__': JSON.stringify("Build time: " + moment().format("DD/MM/YYYY HH:mm:ss"))
    })
);

module.exports = {
    options: webpackConfig,

    watch: {
        plugins: devPlugins,
        watch: true,
        keepalive: true,
        failOnError: false,
    },

    development: {
        plugins: devPlugins,
        debug: true,
        cache: true
    },

    production: getDistConfig("production"),

    sandbox: getDistConfig("sandbox"),

    stats: {
        plugins: webpackConfig.plugins.concat(
            new StatsPlugin('stats.json', {
                chunkModules: true,
                exclude: [/node_modules[\\\/]react/]
            })
        )
    },
};
