const { src, dest } = require("gulp");

const path = require("../config/path.js");
const app = require("../config/app.js");

const fileInclude = require("gulp-file-include");
const typograf = require("gulp-typograf");
const htmlmin = require("gulp-htmlmin");

const html = () => {
  return src(path.html.src)
    .pipe(fileInclude(app.fileInclude))
    .pipe(typograf(app.typograf))
    .pipe(htmlmin(app.htmlmin))
    .pipe(dest(path.html.dest))
}

module.exports = html;
