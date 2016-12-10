module.exports = function(grunt) {

  grunt.initConfig({
    inlinecss: {
      main: {
        options: {
        },
        files: {
          'index.html': 'preindex.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-inline-css');
  grunt.registerTask('default', ["inlinecss"]);
};