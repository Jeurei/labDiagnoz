"Use strict";

const gulp = require("gulp");
const debug = require("gulp-debug");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const del = require("del");
const rename = require("gulp-rename");
const server = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("gulp-csso");
const svgSprite = require("gulp-svg-sprite");

gulp.task("css", function () {
  return gulp
    .src("markup/source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(csso())
    .pipe(rename("style.css"))
    .pipe(gulp.dest("markup/build/css"))
    .pipe(server.stream());
});

gulp.task("svgSprite", function () {
  return gulp
    .src("./markup/build/img/*.svg") // svg files for sprite
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg", //sprite file name
          },
        },
      })
    )
    .pipe(gulp.dest("./markup/build/img"));
});

gulp.task("server", function () {
  server.init({
    server: "markup/build/",
    notify: false,
    open: true,
    cors: true,
    ui: false,
  });

  gulp.watch("markup/source/sass/**/*.scss", gulp.series("css"));
  gulp.watch("markup/source/*.html", gulp.series("html", "refresh"));
});

gulp.task("clean", function () {
  return del("markup/build");
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("copy", function () {
  return gulp
    .src(
      [
        "./markup/source/fonts/**/*.{eot,svg,ttf,woff,woff2}",
        "./markup/source/img/**.{jpg,png,svg}",
      ],
      {
        base: "markup/source",
      }
    )
    .pipe(gulp.dest("./markup/build/"));
});

gulp.task("webp", function () {
  return gulp
    .src("./markup/build/img/**/*.{jpg,png}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("./markup/build/img"));
});

gulp.task("images", function () {
  return gulp
    .src("markup/build/img/**/*.{png,jpg,svg}")
    .pipe(
      imagemin([
        imagemin.optipng({ optimizationLevel: 3 }),
        imagemin.mozjpeg({ progressive: true }),
        imagemin.svgo(),
      ])
    )
    .pipe(gulp.dest("/markup/build/img"));
});

gulp.task("html", function () {
  return gulp
    .src("markup/source/*.html")
    .pipe(posthtml([include()]))
    .pipe(htmlmin())
    .pipe(gulp.dest("markup/build"));
});

gulp.task(
  "build",
  gulp.series("clean", "copy", "css", "images", "webp", "svgSprite", "html")
);

gulp.task("start", gulp.series("build", "server"));
