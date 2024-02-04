'use stric';

const gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
var	spritesmith = require('gulp.spritesmith');
const tinify = require('gulp-tinify');
var	runSequence = require('run-sequence');

gulp.task('sass', function(){
    return gulp.src('./src/scss/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/css'));
});


gulp.task('watch', function(){
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/scss/*/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'sass']);


var config = {	
	spriteSource: 'src/sp_source/',
	spriteSavePath: 'src/sp_result',
	spriteConfig: {
		imgName: 'sprite.png',
		cssName: 'sprite.scss',
		cssFormat: 'scss',
		imgPath: '../sp_result/sprite.png',
		padding: 0,
		algorithm: 'binary-tree',
		algorithmOpts: {
			sort: true
		},
		engine: 'pixelsmith',
	},

}

gulp.task('sprite:images', function() {
	var spriteData = gulp.src( config.spriteSource + '*.+(png|jpg|jpeg|gif|svg)')
	.pipe(spritesmith(config.spriteConfig));
	return spriteData.pipe(gulp.dest(config.spriteSavePath));
});

gulp.task('sprite:minify', function() {
  return gulp.src(config.spriteSavePath + '/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(tinify({
      interlaced: true,
    }))
  .pipe(gulp.dest(config.spriteSavePath))
});

gulp.task('sprite',function() {
	runSequence(
		'sprite:images',
		'sprite:minify'
	)
});
