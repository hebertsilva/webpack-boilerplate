module.exports = {
    development: {
        STATIC_URL: "/static/"
    },

    production: {
        STATIC_URL: "//production-app.s3.amazonaws.com/static/"
    },

    sandbox: {
        STATIC_URL: "//sandbox-iclinic.s3.amazonaws.com/static/"
    }
}
