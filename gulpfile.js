const path = require('path');
const {
  task: gulpTask,
  series: gulpSeries,
  src: gulpSource,
  dest: gulpDest,
  watch: gulpWatch,
} = require('gulp');
const nodemon = require('gulp-nodemon');
const eslint = require('gulp-eslint-new');
const apidoc = require('apidoc');

gulpTask('lint', () => {
  return gulpSource(['src/**/*.js'])
    .pipe(eslint({ fix: true }))
    .pipe(eslint.fix())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Run nodemon from the distribution folder
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

// Run nodemon from the source folder
gulpTask('nodemon-src', function() {
  return nodemon({
    exec: 'node --inspect -r dotenv/config',
    script: 'src/bin/server.js',
    watch: ['src/**/**/*'],
    tasks: ['lint'],
    delay: 2000,
  });
});

gulpTask('apidoc', (done) => {
  apidoc.createDoc({
    src: path.resolve(__dirname, 'src/routes/'),
    dest: path.resolve(__dirname, 'dist/docs/'),
  });
  done();
});

gulpTask('watch', function() {
  return gulpWatch(['src/**/*.js'], gulpSeries(['lint']));
});

gulpTask('default', gulpSeries(['lint', 'nodemon-src']));

gulpTask('debug-dist', gulpSeries(['lint', 'build', 'apidoc', 'nodemon-dist']));

gulpTask('deploy', gulpSeries(['lint', 'build', 'apidoc']));
