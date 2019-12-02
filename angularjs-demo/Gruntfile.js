'use strict';

module.exports = function (grunt) {

	function renameFile(dest, src, ext) {
		var folder = src.substring(0, src.lastIndexOf('/'));
		var filename = src.substring(src.lastIndexOf('/'), src.length);
		filename = filename.substring(0, filename.lastIndexOf('.'));

		var lastChar = dest[dest.length - 1];
		if (lastChar !== '/') {
			dest = dest + '/';
		}
		return dest + folder + filename + ext;
	}

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: ["dist", '.tmp'],

		copy: {
			main: {
				files: [
					// includes files within path
					{
						expand: true,
						cwd: 'app',
						src: [
							'**', '!**/*.js', '!**/*.css', '!bower_components/**'
						],
						dest: 'dist/',
						filter: 'isFile'
					}, {
						expand: true,
						cwd: '../angular-common-elements/dist/es2015',
						src: [
							'**/*.js'
						],
						dest: 'dist/'
					}, {
						expand: true,
						cwd: 'app/bower_components',
						src: ['**/*.*'],
						dest: 'dist/bower_components/'
					}
				],
			},
		},

		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: [{
					expand: true,
					cwd: 'app',
					src: ["**/*.js", "!**/*_test.js", "!**/header-demo-element.js", "!**/footer-demo-element.js", "!bower_components/**"],
					dest: 'dist',
					rename: function (dest, src) {
						return renameFile(dest, src, '.js');
					}
				}]
			}
		},

		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			target: {
				files: [{
					expand: true,
					cwd: 'app',
					src: ['**/*.css', "!bower_components/**"],
					dest: 'dist',
					rename: function (dest, src) {
						return renameFile(dest, src, '.css');
					}
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Tell Grunt what to do when we type "grunt" into the terminal
	grunt.registerTask('default', [
		'clean', 'copy', 'uglify', 'cssmin'
	]);
};