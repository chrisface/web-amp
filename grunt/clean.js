module.exports = function(grunt) {

  grunt.config('clean', {
    development: {
      src: ["<%=grunt.config.get('build_dir')%>/*"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
};
