var gulp = require('gulp')
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src([
    'src/VitaminX.js',
    'src/core/Utility.js',
    'src/core/Matrix.js',
    ])
    .pipe(concat('index.js'))
    .pipe(gulp.dest('./build/'));
});
