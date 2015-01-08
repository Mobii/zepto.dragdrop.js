module.exports = function (grunt) {

  var src = [
    "src/zepto.draggable.js",
    "src/zepto.droppable.js",
    "src/data.js",
    "src/utils.js"];

  grunt.initConfig({
    clean:['dist'],

    concat: {
      dist: {
        src: src,
        dest: 'dist/zepto.dragdrop.js'
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/zepto.dragdrop.min.js': ['dist/zepto.dragdrop.js']
        }
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

    jslint: {
      src: ['src/*.js']
    },

    connect: {
      examples: {
        options: {
          port: 9000,
          base: 'examples'
        }
      }
    },

    karma: {
      options: {
        configFile: 'karma.conf.js',
        runnerPort: 9999,
        browsers: ['Chrome'],
        autoWatch: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('default', ['clean', 'jslint', 'concat', 'uglify']);
  grunt.registerTask('test', ['default', 'karma']);
  grunt.registerTask('serve', ['default', 'connect:examples']);
}
