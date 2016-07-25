module.exports = {
    options: {
        stdout: true,
        stderr: true,
        stdin: true
    },

    compassWatch: {
        command: "cd <%= options.compassPath %> && bundle exec compass watch"
    },

    compassClean: {
        command: "cd <%= options.compassPath %> && bundle exec compass clean"
    },

    compassCompile: {
        command: "cd <%= options.compassPath %> && bundle exec compass compile --force"
    },

    bundler: {
        command: "cd <%= options.compassPath %> && bundle install --path .bundle"
    }
}