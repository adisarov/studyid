const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");

const tinypngFree = require("gulp-tinypng-free");
const svgo = require("gulp-svgo");
const gulpif = require("gulp-if");

const img = () => {
  return src(path.img.src)
    .pipe(gulpif(app.isProd, tinypngFree()))
    .pipe(dest(path.img.dest))
    .pipe(src(path.svg.src))
    .pipe(svgo())
    .pipe(dest(path.img.dest))
}

module.exports = img; 
