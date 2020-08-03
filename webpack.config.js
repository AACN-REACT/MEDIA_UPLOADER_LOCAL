const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const cleanwebpackplugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const miniextractplugin = require("mini-css-extract-plugin");
module.exports = function (env) {
    console.log(env)
  return {
    entry: { index: "./src/index.tsx" },
      output: {
    publicPath:"/assets/",
      filename: "js/site.js",
          path: env.production ? path.resolve(__dirname, '../../Aacn.VideoUploader.Presentation.React/wwwroot'): path.resolve(__dirname, "dist")  ,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", "jsx"],
    },
    module: {
      rules: [
        {
          test: /\.[tj]sx?/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-typescript", "@babel/preset-react"],
              },
            },
          ],
        },
        {
          test: /\.scss?$/,
            exclude: /node_modules/,
            use: [{ loader: miniextractplugin.loader, options: { publicPath: "assets" } }, "css-loader", "sass-loader"],
        },
      ],
      // rules: [{ test: /\.tsx?/, exclude: /node_modules/, use: "ts-loader" }],
    },
    devServer: {
      open: true,
      port: 3000,
    },
    plugins: [
        new miniextractplugin({
            filename:'/css/site.css'
        }),
      new htmlwebpackplugin({
        template: "./public/index.html",
      }),
      new cleanwebpackplugin(),
    ],
  };
};
