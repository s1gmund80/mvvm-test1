var gulp = require('gulp');
var concat = require('gulp-concat');
var paths = {
    all: ['app/**/*'],
    concat: [],
    dist: 'www'
}

gulp.task('copyall', function (){
    return gulp.src(paths.all).pipe(gulp.dest(paths.dist));
});

gulp.task('watch', function(){
    gulp.watch(paths.all,['copyall']);
});

gulp.task('default',['watch','copyall']);
