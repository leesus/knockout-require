'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      scripts: {
        src: ['scripts/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      scripts: {
        files: '<%= jshint.scripts.src %>',
        tasks: ['jshint:scripts']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test']
      },
      coffee: {
        files: '*.coffee',
        tasks: ['coffee:compileFrontend', 'coffee:compileBackend', 'coffee:compileServer']
      },
      coffeeTest: {
        files: ['test/spec/{,*/}*.coffee'],
        tasks: 'coffee:test'
      },
      options: {
        livereload: true
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  grunt.registerTask('test', [
    'jshint'

    // tests with coverage.
    // the server-side coverage test is slower
    //'karma:appContinuous',
    //'coverageBackend',

    // faster tests without Istanbul coverage
    // 'karma:appContinuousNoCoverage',
    // 'simplemocha:backend',
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test'
  ]);
};
