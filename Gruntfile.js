'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    simplemocha: {
      src: ['test/**/*.js']
    },
    jshint: {
      all: ['Gruntfile.js', 'server.js'],
      options: {
        jshintrc: true
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default',  ['test']);
};
