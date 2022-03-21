const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");

const webpackStream = require("webpack-stream");

const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(webpackStream(app.webpack))
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
}

module.exports = js; 
