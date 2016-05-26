var gulp = require('gulp');
var pro = require("./project");
var browserSync = require('browser-sync'),
    less = require('gulp-less'),
    del = require('del'),
    runSequence = require('run-sequence');

gulp.task('clean', function() {
    del.sync('dist').then(function(cb) {
        return cache.clearAll(cb);
    });
});

gulp.task('clean:dist', function() {
    del.sync(['dist/**/*', 'dist'])
});

//每次都只需要修改这个导入的项目名字就可以了


// gulp.task("babel", function () {
//     // return gulp.src(pro.jsSrc)
//     //     .pipe(babel())
//     //     .pipe(convertEncoding('gbk'))
//     //     .pipe(gulp.dest(pro.jsDest))
//     //     .pipe(browserSync.reload({
//     //         stream: true
//     //     }));
//     //注释掉翻译
//     return gulp.src(pro.jsSrc)
//         .pipe(convertEncoding('gbk'))
//         .pipe(gulp.dest(pro.jsDest))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// });
gulp.task('img',function() {
    gulp.src(pro.imgSrc)
        .pipe(gulp.dest(pro.imgDest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('html-source', function() {
    gulp.src(pro.htmls)
        .pipe(gulp.dest(pro.htmlDir))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('less', function() {
    gulp.src(pro.cssSrc)
        .pipe(less())
        .pipe(gulp.dest(pro.cssDest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
//自动刷新的工具
gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: [pro.htmlDir,'./']
        },
        port: 9998
    });
});

console.log(pro.cssSrc);
gulp.task('default', ['browserSync', 'html-source', 'less','img'], function() {
    gulp.watch(pro.htmls, ['html-source']);
    
    gulp.watch(pro.cssSrc, ['less']);
     gulp.watch(pro.imgSrc, ['img']);

});
gulp.task('build',function(callback){
    runSequence(
        'clean:dist',
        ['less','img'],
        callback
        );
});
