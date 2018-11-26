var gulp = require('gulp'),
watch = require('gulp-watch'),
cssInject = require('postcss-inject'),
browserSync = require('browser-sync').create();


gulp.task('watch', function(){  
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    watch('./app/index.html', function(){
        browserSync.reload();
    });
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/final/styles/styles.css')
    .pipe(browserSync.stream());
});