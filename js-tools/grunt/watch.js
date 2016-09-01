module.exports = {
    livereload: {
        files: [
            "<%= options.cssPath %>**/*.css",
            // "<%= options.projectPath %>app/**/templates/**/*.html",
            "<%= options.jsPath %>**/**/*.js"
        ],
        options: {
            livereload: true
        }
    },

    js: {
        files: ["<%= jshint.all %>"],
        tasks: ["jshint"]
    },

    sprites: {
        files: ["<%= options.staticPath %>img/sprite/*.png"],
        tasks: ["shell:compassCompile"]
    },

    fontello: {
        files: ["<%= options.fontPath %>fontello/*.json"],
        tasks: ["fontello"]
    }
};
