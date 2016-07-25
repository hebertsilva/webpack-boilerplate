module.exports = {
    png: {
        options: {
            optimizationLevel: 7
        },

        files: [
            {
                expand: true,
                cwd: "<%= options.imgPath %>",
                src: ["**/*.png"],
                dest: "<%= options.imgPath %>",
                ext: ".png"
            }
        ]
    },

    jpg: {
        options: {
            progressive: false
        },

        files: [
            {
                expand: true,
                cwd: "<%= options.imgPath %>",
                src: ["**/*.jpg"],
                dest: "<%= options.imgPath %>",
                ext: ".jpg"
            }
        ]
    }
}