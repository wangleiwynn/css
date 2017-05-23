/* 
* @Author: anchen
* @Date:   2017-05-08 10:19:17
* @Last Modified by:   anchen
* @Last Modified time: 2017-05-08 10:24:55
*/

'use strict';

var gulp = require('gulp');                        
var browsersync = require('browser-sync').create();

gulp.task('style', function() {
    gulp.src('css/*.css')
        .pipe(browsersync.stream());
});
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(browsersync.stream());
});
gulp.task('serve',function() {
    gulp.start('style','html');
    browsersync.init({
        port: 2016,
        server: {
            baseDir: './'
        }
    });
    gulp.watch('css/*.css', ['style']);
    gulp.watch('*.html', ['html']);
});
gulp.task('default',['serve']);