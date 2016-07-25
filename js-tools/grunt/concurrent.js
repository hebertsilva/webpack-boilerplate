module.exports = {
    options: {
        logConcurrentOutput: true
    },

    watchAll: {
        tasks: ["shell:compassWatch", "webpack:watch"]
    },

    watchJS: {
        tasks: ["webpack:watch"]
    }
}

