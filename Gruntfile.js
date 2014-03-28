'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    clean: {
      files: ['dist']
    },
    copy: {
      main: {
          src: 'src/**/*.js',
          dest: 'dist/',
      },
    },
    uglify: {
      options: {
          banner: '<%= banner %>'
      },
      dist: {
          src: 'src/*',
          dest: 'dist/performance.min.js'
      },
    },
  });

  // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  //grunt.registerTask('default', ['jshint', 'qunit', 'clean', 'requirejs', 'concat', 'uglify']);
  grunt.registerTask('build', ['uglify']);
  grunt.registerTask('default', ['clean', 'build']);

  //grunt.registerTask('preview', ['connect:development']);
  //grunt.registerTask('preview-live', ['default', 'connect:production']);

};
