const path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  FileIncludeWebpackPlugin = require("file-include-webpack-plugin"),
  SvgSpriteLoaderPlugin = require("svg-sprite-loader/plugin"),
  PrettierWebpackPlugin = require("prettier-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  module: {
    rules: [
      // Js
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
        },
      },

      // Font
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, "./src/fonts"),
        use: [{
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        }, ],
      },

      // SCSS
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, "./src/scss"),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // css를 읽어들이기
          "postcss-loader", // 벤더프리픽스 대응
          "sass-loader",  // scss to css
        ],
      },

      // Image - png / jpg ...
      {
        test: /\.(png|jp(e*)g|gif|ico)$/,
        include: path.resolve(__dirname, "./src/images/common"),
        use: {
          loader: "file-loader",
          options: {
            outputPath: "./",
            name: "[path][name].[ext]",
            // 가져올 경로에서 해당 경로만 지우고 가져온다.
            context: "src/"
          },
        },
      },

      // Image - svg 
      {
        test: /\.svg$/,
      include: path.resolve(__dirname, "./src/images/icon"),
        use: {
          loader: "svg-sprite-loader",
          options: {},
        },
      },
    ]

  },

  plugins: [
    // index.js에 포함된 css를 별도의 .css 파일 형식으로 추출한다.
    new MiniCssExtractPlugin({
      filename: "css/style.min.css",
    }),

    // 공통 컴포넌트 영역 모듈화
    new FileIncludeWebpackPlugin(
      {
        source: './src/html/pages',
        replace:[{
          regex: /\[\[FILE_VERSION]]/g,
          to: 'v=1.0.0',
        }],
        loader: 'prettier-loader',
        destination:'../views',
      }
    ),

    new SvgSpriteLoaderPlugin({}),

    // prettier 적용, 
    // html에서는 올바르게 적용이 안됨 (js나 css에서 사용하는게 좋을 것으로 보임)
    // new PrettierWebpackPlugin({
      // printWidth: 150,         
      // tabWidth: 2,             
      // encoding: 'utf-8',       
      // extensions: [ ".html"]
      // useTabs: true, // space대신 tab으로 indent
    // }),

    // dist 폴더 삭제하도록 명령
    // 위 공통 컴포넌트 모듈화를 저장 할 때마다 clean되기 때문에 미적용
    // 스크립트로 처음 최초 npm 돌릴 경우만 clean 되도록 설정
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ["./dist"],
    // }),
  ],

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/style.bundle.js",
    // publicPath: "../../", 기존과 경로가 변경됐으나, 재변경 상관 없음
    publicPath: "../",
  },
};
