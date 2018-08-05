var gulp = require('gulp');
var responsive = require('gulp-responsive');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task("img", () =>
  gulp.src("./public/images/**.*")
    .pipe(responsive({
      "*": [{
        width: 450,
        rename: {suffix: "@450"},
        skipOnEnlargement: true,
        withoutEnlargement: true
      }, {
        width: 900,
        rename: {suffix: "@900"},
        skipOnEnlargement: true,
        withoutEnlargement: true
      }, {
        width: 1080,
        rename: {suffix: "@1080"},
        skipOnEnlargement: true,
        withoutEnlargement: true
      }, {
        width: 1440,
        rename: {suffix: "@1440"},
        skipOnEnlargement: true,
        withoutEnlargement: true
      }],
    }, {
      silent: false,      // Don't spam the console
      errorOnEnlargement: false
    }))
    .pipe(gulp.dest("./public/images/responsive")
));