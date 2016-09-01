module.exports = {
    options: {
        logConcurrentOutput: true
    },

    watchAll: {
        // tasks: ["shell:compassWatch", "watch:livereload", "watch:sprites",  "webpack:watch"]
        tasks: ["shell:compassWatch", "webpack:watch", "watch"]
    },

    watchJS: {
        tasks: ["webpack:watch"]
    }
}

