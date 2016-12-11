var gulp = require("gulp"); 
var webpack  = require("webpack-stream"); 
var remoteFilesDirectory = "Z:\\apps\\react-typescript-pnpjs-example\\";
var filesToInclude = "./dist/**/*";  

gulp.task("build", function() {
    return gulp.src("./src/ts/*.tsx")
    .pipe((webpack(require("./webpack.config.js"))))
    .pipe(gulp.dest("dist/js/"));
}); 

gulp.task("copy", ["build"], function() 
{
    return gulp.src(filesToInclude)
    .pipe(gulp.dest(remoteFilesDirectory)); 
});

gulp.task('default', ["build", "copy"]); 




