// Configured to start a dev server, use sass, reload

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('start', () => {
    console.log('*static sound*... Is this on?!')
    
    return gulp.src('src/css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

// Note to self, start needs to run before watch
    gulp.task('browserSync', () => {
        browserSync.init({
            server: {
                baseDir: './src'
            },
        })
    });

gulp.task('watch', gulp.series('browserSync', 'start', () => {
    console.log('Every breath you take...')
    
    gulp.watch('src/css/*.scss', ['start']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/*.js', browserSync.reload);
    return
}));
