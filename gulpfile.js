var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    return gulp.src(['app/js/lib/angular/*.js','app/js/lib/angular-resource/*.js','app/js/lib/angular-route/*.js', 'app/js/*.js',
        'app/*.js','app/controllers/*.js','app/directives/*.js',
        'app/services/*.js','app/assets/json/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('app/all'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/all'));
});


gulp.task('watch', function() {
    gulp.watch(['app/lib/angular/*.js','app/lib/angular-resource/*.js','app/lib/angular-route/*.js',
        'app/allTemplate/templates.js','app/*.js','app/controllers/*.js','app/directives/*.js',
        'app/filters/*.js','app/services/*.js','app/assets/javascripts/*.js'
        ],
        ['lint', 'scripts']);
});

gulp.task('default', ['lint','scripts']);