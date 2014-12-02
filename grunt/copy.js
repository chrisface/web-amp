
module.exports = function(grunt) {

  grunt.config('copy', {
    html: {
      files: [
        {
          src: [
            grunt.config.get('app_files.html')
          ],
          dest: grunt.config.get("build_dir"),
          cwd: 'src',
          expand: true
        }
      ]
    },
    js: {
      files: [
        {
          src: [
            'combined/**.js',
            'combined/**.map'
          ],
          dest: grunt.config.get("build_dir"),
          cwd: 'src',
          expand: true
        }
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
