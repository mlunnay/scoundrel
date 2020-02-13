var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var TypedocWebpackPlugin = require('typedoc-webpack-plugin');
const Merge = require('webpack-merge');

var config = {
  /*
   * app.ts represents the entry point to your web application. Webpack will
   * recursively go through every "require" statement in app.ts and
   * efficiently build out the application's dependency tree.
   */
  entry: ["./lib/scoundrel.ts"],

  devtool: "source-map",

  /*
   * The combination of path and filename tells Webpack what name to give to
   * the final bundled JavaScript file and where to store this file.
   */
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "scoundrel.js",
    library: "scoundrel"
  },

  /*
   * resolve lets Webpack now in advance what file extensions you plan on
   * "require"ing into the web application, and allows you to drop them
   * in your code.
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        include: path.resolve(__dirname, "node_modules/pixi.js"),
        loader: "transform?brfs",
        enforce: "post"
      }
    ]
  },

  externals: [
        // Don't bundle pixi.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable PIXI.
        {"pixi.js": "PIXI"}
    ],
  plugins: [
        new CopyWebpackPlugin([
            // {output}/file.txt
            { from: 'node_modules/pixi.js/dist/pixi.min.*', flatten: true },
            { from: 'static'}
        ]),
        // new TypedocWebpackPlugin({ignoreCompilerErrors: true, mode: 'modules'})
  ],
  devServer: {
    contentBase: 'build'
  }
};

// only run Typedoc if we are building so it dosent run when we are watching
if(process.env.npm_lifecycle_event === 'build')
  module.exports = Merge(config, {
    plugins: [
      new TypedocWebpackPlugin({ignoreCompilerErrors: true, mode: 'modules'})
    ]
  })
else
  module.exports = config;