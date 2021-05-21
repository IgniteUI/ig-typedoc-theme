const { src, dest} = require('gulp');
const path = require('path');
const slash = require('slash');
const ts = require('gulp-typescript');
const { series } = require('gulp');

const typedocBuildThemeTS = () => {
  return src(
    slash(path.join(__dirname, 'src', 'assets', 'js', 'src', 'theme.ts'))
  )
  .pipe(ts({
    target: 'es2017',
    moduleResolution: 'node',
    module: 'commonjs'
  }))
  .pipe(dest(slash(path.join(__dirname, 'dist'))));
};

const buildHelpers = () => {
  return src([
    slash(path.join(__dirname, 'src', 'helpers', 'getConfigData.ts'))
  ])
  .pipe(ts({
    target: 'es2017',
    moduleResolution: 'node',
    module: 'commonjs',
  }))
  .pipe(dest(slash(path.join(__dirname, 'dist', 'helpers'))));
}
module.exports.buildTypedocTs = series(typedocBuildThemeTS, buildHelpers);