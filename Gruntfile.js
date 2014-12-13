module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            options: {
                banner: 'balabala\n'
            },
            build: {
                src: 'src/main.js',
                dest: 'output/main.js'
            }
        },
        bower: {
            install: {
                options: {
                    targetDir: './lib',
                    layout: 'byComponent',
                    install: true,
                    verbose: false,
                    cleanTargetDir: false,
                    cleanBowerDir: false,
                    bowerOptions: {}
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-bower-task');

    grunt.registerTask('default', ['uglify']);

};
