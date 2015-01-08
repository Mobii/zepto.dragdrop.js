module.exports = function (grunt) {

  var src = [
    "src/zepto.draggable.js",
    "src/zepto.droppable.js",
    "src/data.js",
    "src/utils.js"];

  grunt.initConfig({
    concat: {
      dist: {
        src: src,
        dest: 'dist/zepto.dragdrop.js'
      }
    },

    min: {
      dist: {
        src: src,
        dest: 'dist/zepto.dragdrop.min.js'
      }
    },

    jshint: {
      options: {
        asi: true,
        browser: true,
        curly: false,
        eqeqeq: false,
        expr: true,
        forin: false,
        newcap: true,
        laxcomma: true,
        strict: false,
        validthis: true
      },
      globals: {
        "Zepto": true
      }
    },

    lint: {
      files: ['src/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-min');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jslint');

  grunt.registerTask('default', 'lint', 'concat', 'min');
}
