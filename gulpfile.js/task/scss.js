const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");

const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const cleanCss = require("gulp-clean-css");
const gulpif = require("gulp-if");

const scss = () => {
  return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(sass())
    .pipe(gulpif(app.isProd, autoprefixer(app.autoprefixer)))
    .pipe(groupCssMediaQueries())
    .pipe(gulpif(app.isProd, cleanCss(app.cleanCss)))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
}

module.exports = scss; 
