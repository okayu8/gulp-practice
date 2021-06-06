var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function (done) {
  gulp.src("sass/**/*.scss")
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest("./css"));
  done();
})

guilp.watch("default", function(done){
  gulp.watch("sass/**/*.scss", ["sass"]);
  done();
})

