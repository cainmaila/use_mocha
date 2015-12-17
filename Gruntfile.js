module.exports = function(grunt) {

    grunt.initConfig({
        mochaTest: {
            my_test: {
                options: {
                    // ui: 'tdd',
                    reporter: 'spec'
                },
                src: ['app.js'] //執行 mocha app.js
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.registerTask('default', ['mochaTest']);

};
