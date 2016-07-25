module.exports = function(grunt) {
    var target;
    var watch = grunt.option("watch");
    var tasks = {};

    if ( grunt.option("prod") || grunt.option("production") ) {
        target = "production";
    } else if( grunt.option("sandbox") ) {
        target = "sandbox";
    } else {
        target = "development";
    }

    tasks["default"] = ["concurrent:watchAll"];
    tasks.build = ["shell:compassCompile", "webpack:"+target];
    tasks.bundler = ["shell:bundler"];
    tasks.stats = ["webpack:stats"];

    if ( watch ) {
        tasks.css = ["shell:compassWatch"];
        tasks.js = ["shell:watchJS"];
    } else if( target ) {
        tasks.css = ["shell:compassCompile"];
        tasks.js = ["webpack:"+target];
    }

    return tasks;
};
