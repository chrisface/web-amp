module.exports = function(grunt) {

  grunt.config('watch', {
    options: {
      livereload: true,
    },
    js: {
      files: [
        'src/app/**/*.js'
      ],
      tasks: ['clean', 'uglify', 'copy']
    },
    html: {
      files: [
        'src/app.html',
        'src/app/**/*.html'
      ],
      tasks: ['clean', 'copy']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
