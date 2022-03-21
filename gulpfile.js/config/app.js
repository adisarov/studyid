const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  fileInclude: {
    prefix: '@'
  },

  typograf: {
    locale: ['ru', 'en-US']
  },

  htmlmin: {
    collapseWhitespace: isProd
  },

  autoprefixer: {
    cascade: false,
    grid: true,
    overrideBrowserslist: ["last 5 versions"]
  },

  cleanCss: {
    level: 2
  },

  webpack: {
    mode: isProd ? "production" : "development",
    output: {
      filename: "main.js",
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", {
                targets: "defaults"
              }]
            ]
          }
        }
      }]
    },
    devtool: false
  },

  svgSprite: {
    mode: {
      stack: {
        sprite: "../sprite.svg"
      }
    }
  }
}
