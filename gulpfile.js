const {
  task: gulpTask,
  series: gulpSeries,
  src: gulpSource,
  dest: gulpDest,
  watch: gulpWatch
} = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint');
const apidoc = require('gulp-apidoc');

gulpTask('lint', function() {
  return gulpSource(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulpTask('nodemon-dist', function() {
  return nodemon({
    exec: 'node --inspect -r dotenv/config',
    script: 'dist/bin/server.js',
    watch: ['src/**/**/*'],
    tasks: ['build'],
    delay: 2000,
    inspect: true,
  });
});

gulpTask('build', function() {
  return gulpSource(['src/**/*.js'], { base: 'src' })
    .pipe(gulpDest('dist/'));
});

gulpTask('nodemon-src', function() {
  return nodemon({
    exec: 'node --inspect -r dotenv/config',
    script: 'src/bin/server.js',
    watch: ['src/**/**/*'],
    tasks: ['lint'],
    delay: 2000,
  });
});

gulpTask('apidoc', function(done) {
  apidoc({
    src: 'src/routes/',
    dest: 'dist/docs/'
  }, done);
});

gulpTask('watch', function() {
  return gulpWatch(['src/**/*.js'], gulpSeries(['lint']));
});

gulpTask('default', gulpSeries(['lint', 'nodemon-src']));

gulpTask('debug-dist', gulpSeries(['lint', 'build', 'apidoc', 'nodemon-dist']));

gulpTask('deploy', gulpSeries(['lint', 'build', 'apidoc']));
