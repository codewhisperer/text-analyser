module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: 'app/',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
          'main.js',
          '**/*.test.js'
        ],
        preprocessors: {
          'main.js': ['webpack'],
          '**/*.test.js': ['webpack']
        },

        // test results reporter to use
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        plugins: [
          'karma-jasmine',
          'karma-phantomjs-launcher',
          'karma-webpack'
        ],
        webpack: {
          resolve: {
            extensions: ['', '.js']
          },
          module: {
            loaders: [
              { test: /\.json$/,   loader: "json-loader" },
              { test: /\.js$/,     loader: "uglify" },
              { test: /\.css$/,    loader: "css-loader" },
              { test: /\.html$/,   loader: "raw" },
              { test: /\.(png|gif|jpg|eot)$/, loader: "file?name=[path][name].[ext]" },
              { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
              { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
              { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
            ]
          }
        },
        webpackMiddleware: {
          noInfo: true
        }
    });
};
