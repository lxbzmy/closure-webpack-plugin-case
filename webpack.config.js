const path = require('path');
const ClosurePlugin = require('closure-webpack-plugin');


module.exports = {
  entry : {
    app : './src/index.js'
  },
  plugins : [
      new ClosurePlugin({mode: 'AGGRESSIVE_BUNDLE',
          closureLibraryBase: require.resolve('google-closure-library/closure/goog/base'),
          deps: [
            require.resolve('google-closure-library/closure/goog/deps')
          ]
          
        }, {
          
          // compiler flags here
          //
          // for debuging help, try these:
          //
          // formatting: 'PRETTY_PRINT'
          // debug: true
        })
      ],
  devtool : 'source-map',
  output : {
    filename : '[name].bundle.js',
    path : path.resolve(__dirname, 'target/web-compress')
  },
  module : {
    rules : [ {
      test : /\.css$/,
      use : [ 'style-loader', 'css-loader' ]
    }]
  }
};
