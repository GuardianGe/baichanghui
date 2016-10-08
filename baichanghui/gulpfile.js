var gulp = require('gulp');
var webserver = require('gulp-webserver');
var url = require('url');
var fs = require('fs');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var named = require('vinyl-named');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var runsequence = require('run-sequence');
// 服务于mock
gulp.task('webserver',function () {
  gulp.src('./')
  .pipe(webserver({
    livereload: true,
    directoryListing: {
      enable: true,
      path:'./'
    },
    port: 80,
    host: 'localhost',
    // mock数据
    middleware:function (req,res,next) {
      var urlObj = url.parse(req.url,true),
          method = req.method;
          switch (urlObj.pathname) {
            // console.log(urlObj.pathname);
            case '/api/list.php':
              res.setHeader('Content-Type','application/json');
              fs.readFile('mock/data.json','utf-8',function (err,data) {
                res.end(data);
              });
              // console.log(data);
              return;
            default:
          }
          next();
    }

  }));
});
// 复制index
gulp.task('copy-index',function () {
  return gulp.src('index.html')
  .pipe(gulp.dest('app/'))
});
// sass编译和压缩
gulp.task('scss',function () {
  return gulp.src('src/styles/index.scss')
         .pipe(sass())
         .pipe(minifyCSS())
         .pipe(gulp.dest('app/prd/styles/'));
});
//js的模块化
var jsFiles = [
  'src/scripts/index.js',
];
gulp.task('packjs',function () {
  return gulp.src(jsFiles)
  .pipe(named())
  .pipe(webpack({
    output: {
      filename: '[name].js'
    },
    module :{
      loaders: [
        {
          test: /\.js$/,
          loader: 'imports?define=>false'
        },{
          test:/\.string$/,
          loader:'string'
        }
      ]
    },
    resolve:{
      alias: {

      }
    },
    devtool: '#eval-source-map'
  }))
  .pipe(uglify())
  .pipe(gulp.dest('app/prd/scripts'))
});


// 版本号
gulp.task('ver',function () {
  gulp.src('app/prd/styles/index.css')
  .pipe(rev())
  .pipe(gulp.dest('app/prd/styles'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('app/ver/styles'));
  gulp.src('app/prd/scripts/index.js')
  .pipe(rev())
  .pipe(gulp.dest('app/prd/scripts'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('app/ver/scripts'));
});
gulp.task('html',function () {
  gulp.src(['app/ver/**/*.json','app/*.html'])
      .pipe(revCollector())
      .pipe(gulp.dest('app/'));
})
gulp.task('min',['ver','html']);
// 检测运行
gulp.task('watch',function () {
    gulp.watch('index.html',['copy-index']);
    gulp.watch('src/scripts/**/*',['packjs']);
    gulp.watch('src/styles/**/*',['scss']);
});
gulp.task('default',function () {
  runsequence('webserver','min','watch');
});
