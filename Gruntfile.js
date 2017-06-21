/**
 * Gruntfile
 *
 * This Node script is executed when you run `grunt`.
 * It's purpose is to load the Grunt tasks in your project's `tasks`
 * folder, and allow you to add and remove tasks as you see fit.
 * For more information on how this works, check out the `README.md`
 * file that was generated in your `tasks` folder.
 *
 * WARNING:
 * Unless you know what you're doing, you shouldn't change this file.
 * Check out the `tasks` directory instead.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            prod: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    './css/styles.css': './sass/styles.scss',
                }
            },
            dev: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    './css/styles.css': './sass/styles.scss',
                }
            }
        },
        watch: {
            css: {
                files: ['./sass/**/*.scss'],
                tasks: ['sass:dev'],
                options: {
                    spawn: false
                }
            },
        },
    });

    // Load tasks...
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-simple-watch');

    // Default task.
    grunt.registerTask('default', ['simple-watch']);
};