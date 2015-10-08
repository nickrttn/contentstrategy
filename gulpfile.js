var gulp = require('gulp');
var asciidoctor = require('gulp-asciidoctor');
var browserSync = require('browser-sync').create();

gulp.task('serve', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./*.adoc', ['adoc-watch']);
});

gulp.task('adoc-watch', ['adoc'], browserSync.reload);

gulp.task('adoc', function(){
	return gulp.src('*.adoc')
		.pipe(asciidoctor({
			doctype: 'article',
			header_footer: true,
			attributes: ['showtitle', 'toc', 'linkcss!']
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['serve']);
gulp.task('build', ['adoc']);