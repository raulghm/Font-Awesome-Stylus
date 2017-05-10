var gulp = require('gulp');
var gulpStylus = require('gulp-stylus');
var fontAwesome = require('../../lib/font-awesome-stylus');

gulp.task('build', function () {
	return gulp.src('./test.styl')
	.pipe(gulpStylus({
		use: [
			fontAwesome(),
		]
	}))
	.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['build']);
