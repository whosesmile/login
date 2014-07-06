/* global module:false, require:true */
module.exports = function (grunt) {

  // load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    connect: {
      dev: {
        options: {
          base: ['.'],
          port: 8888,
          open: 'http://127.0.0.1:8888',
          keepalive: true,
          hostname: '*'
        }
      }
    }
  });

  // connect 和 watch 都会阻塞进程 为了防止watch阻塞connect
  // 将watch放在connect后边, 同时不要设定connect的keepalive
  grunt.registerTask('default', function () {
    grunt.task.run(['connect:dev']);
  });
};