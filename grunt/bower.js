module.exports = function(grunt) {

  grunt.config('bower', {
    development: {
      dest: "src/vendor"
    }
  });

  grunt.loadNpmTasks('grunt-bower');
};
