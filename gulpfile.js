var gulp = require('gulp');
var responsive = require('gulp-responsive');
var prettyHtml = require('gulp-pretty-html');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

//gulp.task('netlify', ['img', 'compress'],
    //function() {});

gulp.task("img", () =>
  gulp.src("./themes/charity/static/images/user/**.*")
    .pipe(responsive({
      "*": [{
        width: 450,
        rename: {suffix: "@450"},
        skipOnEnlargement: true,
        withoutEnlargement: true
      }, {
        width: 768,
        rename: {suffix: "@768"},
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
      }, {
        width: 1920,
        rename: {suffix: "@1920"},
        skipOnEnlargement: true,
        withoutEnlargement: true
      }],
    }, {
      silent: false,      // Don't spam the console
      errorOnEnlargement: false,
      quality: 85
    }))
    .pipe(gulp.dest("./themes/charity/static/images/responsive")
));

gulp.task('prettify', function () {
    return gulp.src('./public/**/*.html')
        .pipe(prettyHtml( {max_preserve_newlines: 1 } ))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
});