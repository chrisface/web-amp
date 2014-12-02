module.exports = function(grunt) {

  grunt.config('uglify', {
    development: {
      options: {
        sourceMap: true,
        mangle: false,
        beautify: true
      },
      files: {
        '<%= grunt.config.get("src_dir") %>/combined/application.js': [grunt.config.get("app_files.js")],
        '<%= grunt.config.get("src_dir") %>/combined/vendor.js': [grunt.config.get("vendor_files.js")]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
