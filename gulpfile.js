var gulp = require('gulp')
var browserSync = require('browser-sync')
gulp.task('browserSync', function () {
   browserSync.init({
      server: {
         baseDir: 'public'
      }
   })
})
gulp.task('watch', ['browserSync'], function () {
   gulp.watch('public/index.html', browserSync.reload)
   gulp.watch('public/css/*.css', browserSync.reload)
   gulp.watch('public/js/*.js', browserSync.reload)
   gulp.watch('public/img/*.jpg', browserSync.reload)
   gulp.watch('public/img/*.jpeg', browserSync.reload)
   gulp.watch('public/img/*.png', browserSync.reload)
   gulp.watch('public/img/*.gif', browserSync.reload)
   gulp.watch('public/img/*.bmp', browserSync.reload)
   gulp.watch('public/img/*.svg', browserSync.reload)
})
