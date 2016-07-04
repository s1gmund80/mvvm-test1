var gulp = require('gulp');
var concat = require('gulp-concat');
var exec = require('child_process').exec;
var paths = {
    all: ['app/**/*'],
    bower: ['bower_components/**/*'],
    concat: [],
    dist: 'www'
}

gulp.task('copyall', function (){
    gulp.src(paths.bower).pipe(gulp.dest(paths.dist+'/bower_components'));
    return gulp.src(paths.all).pipe(gulp.dest(paths.dist));

});

gulp.task('watch', function(){
    gulp.watch(paths.all,['copyall']);
});

gulp.task('server', function(){
    exec('node server.js', function(error,stdout,stderr){
        console.log('stdout: ', stdout);
        console.log('stderr: ', stderr);
        if (error !== null){
            console.log('exec error: ', error);
        }   
    });
});

gulp.task('default',['server','watch','copyall']);
