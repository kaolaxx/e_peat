//导入模块
let { src, dest, watch } = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

function fnCoptIndex() {
    return src('./src/index.html').pipe(dest('./dist'));
}
function fnHTML() {
    return src('./src/html/**/*.html')
        .pipe(htmlmin())
        .pipe(dest('./dist/html'));
}
function fnCSS() {
    return src('./src/sass/**/*.scss')
        .pipe(sass())
        // .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/css'));
}
function fnJS() {
    return src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/js'));
}
function fnImg() {
    return src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'));
}
function fnLib() {
    return src('./src/lib/**/*')
        .pipe(dest('./dist/lib'));
}
// data
function fnData() {
    return src('./src/data/**/*')
        .pipe(dest('./dist/data'));
}
//font
function fnFont() {
    return src('./src/font/**/*')
        .pipe(dest('./dist/font'));
}
function fnwatch() {
    watch('./src/index.html', fnCoptIndex);
    watch('./src/html/**/*.html', fnHTML);
    watch('./src/img/**/*', fnImg);
    watch('./src/js/**/*.js', fnJS);
    watch('./src/lib/**/*', fnLib);
    watch('./src/sass/**/*.scss', fnCSS);
    watch('./src/data/**/*', fnData)
}
//导出模块
exports.copyIndex = fnCoptIndex;
exports.html = fnHTML;
exports.img = fnImg;
exports.js = fnJS;
exports.lib = fnLib;
exports.css = fnCSS;
exports.default = fnwatch;
exports.data = fnData;
exports.font = fnFont;