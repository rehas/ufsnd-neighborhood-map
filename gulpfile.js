let gulp = require('gulp'),
  concat = require('gulp-concat');

const folder = {
  src: 'src/',
  dist: 'dist/'
};

gulp.task('scripts', function(){
    return gulp.src(folder.src + 'scripts/**/*.js')
          .pipe(concat('main.js'))
          .pipe(gulp.dest(folder.dist));
});

gulp.task('vendors', function(){
    return gulp.src(folder.src + 'vendors/**/*.js')
          .pipe(concat('vendors.js'))
          .pipe(gulp.dest(folder.dist));
});

gulp.task('watch', function() {
  gulp.watch(folder.src + 'scripts/**/*.js',
    ['scripts', function(){console.log("I'm at *scripts watch");}]);
  gulp.watch(folder.src + 'vendors/**/*.js',
    ['vendors', function(){console.log("I'm at *vendors watch");}]);

});

gulp.task('default', ['scripts','vendors', 'watch']);
