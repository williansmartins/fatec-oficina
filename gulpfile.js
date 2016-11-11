// Load Gulp
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plugins = require('gulp-load-plugins')({
        rename: {
            'gulp-live-server': 'serve'
        }
    });

// Start Watching: Run "gulp"
gulp.task('default', ['build-css', 'build-css-vendor', 'build-js', 'build-js-vendor', 'server']);

// identifies a dependent task must be complete before this one begins
gulp.task('all', ['build-css'], function() {
  console.info("agora sim esta pronto");
});

// Run "gulp server"
gulp.task('server', ['serve', 'watch']);

// Minify jQuery Plugins: Run manually with: "gulp build-js-vendor"
gulp.task('build-js-vendor', function () {
    return gulp.src('js/vendor/**/*.js')
        .pipe(plugins.uglify({
            output: {
                'ascii_only': true
            }
        }))
        // .pipe(plugins.concat('jquery.plugins.min.js'))
        .pipe(gulp.dest('build/js/vendor/'));
});

// Minify Custom JS: Run manually with: "gulp build-js"
gulp.task('build-js', function () {
    return gulp.src(['js/**/*.js', '!js/vendor/**/*.js'])
        .pipe(plugins.jshint())
        // .pipe(plugins.jshint.reporter('jshint-stylish'))
        // .pipe(plugins.uglify({
        //     output: {
        //         'ascii_only': true
        //     }
        // }))
        //.pipe(plugins.concat('scripts.min.js'))
        .pipe(gulp.dest('build/js/'));
});

// Less to CSS: Run manually with: "gulp build-css"
gulp.task('build-css', function () {
    return gulp.src('less/*.less')
        .pipe(plugins.plumber())
        .pipe(plugins.less())
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer({
            browsers: [
                    '> 1%',
                    'last 2 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
            cascade: false
        }))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('build/css/')).on('error', gutil.log);
});

// Less to CSS: Run manually with: "gulp build-css"
gulp.task('build-css-vendor', function () {
    return gulp.src(['less/vendor/bootstrap/bootstrap.less','less/vendor/jquery-datatables/jquery.dataTables.less'])
        .pipe(plugins.less())
        .on('error', function (err) {
            gutil.log(err);
            this.emit('end');
        })
        .pipe(plugins.autoprefixer({
            browsers: [
                    '> 1%',
                    'last 2 versions',
                    'firefox >= 4',
                    'safari 7',
                    'safari 8',
                    'IE 8',
                    'IE 9',
                    'IE 10',
                    'IE 11'
                ],
            cascade: false
        }))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('build/css/vendor/')).on('error', gutil.log);
});

// Default task
gulp.task('watch', function () {
    gulp.watch('js/vendor/**/*.js', ['build-js-vendor']);
    gulp.watch(['js/**/*.js', '!js/vendor/**/*.js'], ['build-js']);
    gulp.watch('less/**/*.less', ['build-css','build-css-vendor']);
});

// Folder "/" serving at http://localhost:8888
// Should use Livereload (http://livereload.com/extensions/)
gulp.task('serve', function () {
    var server = plugins.serve.static('/', 8888);
    server.start();
    gulp.watch(['build/**', '*.html'], function (file) {
        server.notify.apply(server, [file]);
    });
});