const gulp = require('gulp');
const changed = require('gulp-changed');
const minifyHtml = require('gulp-minify-html');
const concat = require('gulp-concat');
const autoprefix = require('gulp-autoprefixer');
const minifyCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const del = require('del');
const runSequence = require('run-sequence');
const less = require('gulp-less');

const srcs = {
    buildArtefacts: 'build/**/*',
    scripts: 'src/scripts/**/*.js',
    html: ['src/*.html'],
    styles: 'src/styles/**/*.less',
    assets: 'src/assets/**/*',
    libs: [],
    htAccess: ['src/.htaccess']
};


const dests = {
    base: 'build',
    libs: 'build/libs/',
    assets: 'build/assets/',
    scripts: 'build/scripts/',
    styles: 'build/styles/',
    app: 'app/'
};

gulp.task('copy', function () {
    return gulp.src(srcs.libs)
        .pipe(gulp.dest(dests.libs))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('assets', function () {
    return gulp.src(srcs.assets)
        .pipe(changed(dests.assets))
        .pipe(gulp.dest(dests.assets))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: dests.base
        }
    });
});

gulp.task('html', function () {
    const htmlDest = './build';

    return gulp.src(srcs.html)
        .pipe(changed(dests.base))
        .pipe(minifyHtml())
        .pipe(gulp.dest(htmlDest))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function () {
    return gulp.src(srcs.scripts)
        .pipe(gulp.dest(dests.scripts))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('styles', function () {
    return gulp.src(srcs.styles)
        .pipe(less())
        .pipe(concat('styles.min.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(dests.styles))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('cleanWebsite', function () {
    return del([dests.app]);
});

gulp.task('clean', function () {
    return del([dests.base]);
});

gulp.task('copyWebsite', function () {
    gulp.src(srcs.buildArtefacts).pipe(gulp.dest(dests.app));
    gulp.src(srcs.htAccess).pipe(gulp.dest(dests.app));
});

gulp.task('build', ['copy', 'assets', 'html', 'scripts', 'styles']);

gulp.task('website', done => {
    runSequence('clean', 'build', 'cleanWebsite', 'copyWebsite', () => done());
});

gulp.task('default', function (done) {
    runSequence('clean', 'build', 'browserSync', function () {
        gulp.watch(srcs.html, ['html']);
        gulp.watch(srcs.assets, ['assets']);
        gulp.watch(srcs.scripts, ['scripts']);
        gulp.watch(srcs.styles, ['styles']);
        done();
    });
});
