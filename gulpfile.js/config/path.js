const pathSrc = "./src";
const pathDest = "./dist";

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest
  },

  scss: {
    src: pathSrc + "/scss/*.scss",
    watch: pathSrc + "/scss/**/*.scss",
    dest: pathDest + "/css"
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js"
  },

  img: {
    src: pathSrc + "/img/*.{png,jpg,webp}",
    watch: pathSrc + "/img/**/*.*",
    dest: pathDest + "/img"
  },

  svg: {
    src: pathSrc + "/img/*.svg",
    dest: pathDest + "/img"
  },

  sprite: {
    src: pathSrc + "/img/svg/*.svg",
    watch: pathSrc + "/img/svg/*.svg",
    dest: pathDest + "/img/svg"
  },

  fonts: {
    src: pathSrc + "/fonts/**/*.*",
    watch: pathSrc + "/fonts/**/*.*",
    dest: pathDest + "/fonts"
  }
}
