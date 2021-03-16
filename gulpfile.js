const { dest, src } = require('gulp')

function build() {
  return src([
    './src/li-ui/**/*',
    '!./src/li-ui/**/*.ts',
    '!./src/li-ui/**/*.less',
  ]).pipe(dest('./dist'))
}

exports.default = build
