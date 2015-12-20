module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
  });

  grunt.config( 'webpack', require('./grunt-tasks/webpack.js') );
  grunt.config( 'watch', require('./grunt-tasks/watch.js') );

  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['webpack']);
};
