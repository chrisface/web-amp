module.exports = function(grunt) {

  // Initialise config
  grunt.initConfig({
    pkg: require('./package.json')
  });

  grunt.config.merge({
    build_dir: 'build',
    src_dir: 'src',
    app_files: {
      js: [
          'src/app/**/*.js',
          '!src/app/**/*.spec.js',
          '!src/vendor/**/*.js',
          '!src/combined/**.js'
      ],
      html: [
        'app.html'
      ]
    },
    vendor_files: {
      js: 'src/vendor/**/*.js',
      css: 'vendorFiles/**/*.css'
    }
  });

  grunt.loadTasks('grunt');

  grunt.registerTask('default', ['watch']);
};
