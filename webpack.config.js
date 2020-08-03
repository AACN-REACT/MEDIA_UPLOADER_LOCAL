const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const cleanwebpackplugin = require("clean-webpack-plugin").CleanWebpackPlugin;
const miniextractplugin = require("mini-css-extract-plugin");
module.exports = function (env) {
  return {
    entry: { index: "./src/index.tsx" },
    output: {
      filename: "[name][contentHash].js",
      path: path.resolve(__dirname, "dist"),
    },
    optimization: {
      runtimeChunk: "single",
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
          use: [miniextractplugin.loader, "css-loader", "sass-loader"],
        },
      ],
      // rules: [{ test: /\.tsx?/, exclude: /node_modules/, use: "ts-loader" }],
    },
    devServer: {
      open: true,
      port: 3000,
    },
    plugins: [
      new miniextractplugin(),
      new htmlwebpackplugin({
        template: "./public/index.html",
      }),
      new cleanwebpackplugin(),
    ],
  };
};
