var path = require('path');
var absPath = './';
module.exports = {
  to: {
    build: {
      directory: {
        client: absPath + 'build/client',
        server: absPath + 'build/server',
        test: absPath + 'build/tests/api'
      },
      server: {
        server: absPath + 'build/server/server.js'
      }
    },
    client: {
      dev: {
        js: {
          main: absPath + 'client/app.js',
          all: absPath + 'client/**/*.js'
        },
        html: {
          main: absPath + 'client/index.html',
          all: [absPath + 'client/index.html', absPath + 'client/**/*.jade'],
          others: [absPath + 'client/**/*.jade']
        },
        css: {
          all: absPath + 'client/**/*.less',
        },
        test: {
          api: absPath + 'tests/api/*.spec.js'
        },
        images: {
          all: absPath + 'client/img/*'
        }
      },
      build: {
        js: {
          main: 'app.min.js'
        },
        test: {
          api: 'test-api.js'
        },
        html: {
          main: absPath + 'build/client/index.html'
        },
        css: {
          main: absPath + 'build/client'
        },
        images: {
          all: absPath + 'build/client'
        }
      }
    },
    server: {
      dev: {
        js: {
          main: absPath + 'server/server.js',
          all: absPath + 'server/**/*.js'
        }
      }
    }
  }
};
