var gulp = require('gulp');
var responsive = require('gulp-responsive');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task("img", () =>
  gulp.src("./public/images/**.*")
    .pipe(responsive({
      "*": [{
        width: 480,
        rename: {suffix: "-sm"},
        skipOnEnlargement: true,
        withoutEnlargement: true
      }, {
        width: 480 * 2,
        rename: {suffix: "-sm@2x"},
        skipOnEnlargement: true,
        withoutEnlargement: true
      }, {
        width: 675,
        skipOnEnlargement: true,
        withoutEnlargement: true
      }, {
        width: 675 * 2,
        rename: {suffix: "@2x"},
        skipOnEnlargement: true,
        withoutEnlargement: true
      }],
    }, {
      silent: false,      // Don't spam the console
      errorOnEnlargement: false
    }))
    .pipe(gulp.dest("./public/dist/img")
));