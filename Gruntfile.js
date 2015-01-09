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

    connect: {
      examples: {
        options: {
          port: 9000,
          base: ['bower_components', 'dist', 'examples'],
        }
      }
    },

    watch:{
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['build'],
      },
      test: {
        files: ['src/**/*.js', 'tests/**/*.js'],
        tasks: ['build', 'karma:unit']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        browsers: ['Chrome'],
        autowatch: true,
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('build', ['clean', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('test', ['build', 'karma:unit', 'watch:test']);
  grunt.registerTask('serve', ['build', 'connect:examples'])
  grunt.registerTask('default', ['build', 'connect:examples', 'watch:scripts']);
}
