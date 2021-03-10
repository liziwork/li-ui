const { dest, src, watch, series } = require('gulp')
const ts = require('gulp-typescript')
const less = require('gulp-less')
const rename = require('gulp-rename')

function format_ts() {
  const tsProject = ts.createProject('tsconfig.json', {
    rootDir: './src',
  })
  return tsProject.src().pipe(tsProject()).js.pipe(dest('./dist'))
}

function format_less() {
  return src('./src/**/*.less')
    .pipe(less())
    .pipe(
      rename(function (path) {
        path.extname = '.wxss'
      })
    )
    .pipe(dest('./dist'))
}

function copy_json() {
  return src('./src/**/*.json').pipe(dest('./dist'))
}

function copy_wxml() {
  return src('./src/**/*.wxml').pipe(dest('./dist'))
}

const defaultTask = series(format_ts, format_less, copy_json, copy_wxml)

watch(['./src/**/*'], { delay: 300 }, defaultTask)

exports.default = defaultTask
