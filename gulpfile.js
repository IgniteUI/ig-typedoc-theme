const { src, dest} = require('gulp');
const path = require('path');
const slash = require('slash');
const ts = require('gulp-typescript');
const { series } = require('gulp');
const concat = require('gulp-concat');

const TYPEDOC_THEME = {
  SRC: slash(path.join(__dirname, 'src')),
  DIST: slash(path.join(__dirname, 'dist')),
  STYLES: {
      ENTRY: slash(path.join('assets', 'css', 'main.sass')),
      OUT: slash(path.join('assets','css')),
      MAPS: slash(__dirname),
      CONFIG: {
          outputStyle: 'compressed'
      }
  }
};

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
};

const typedocMinifyJS = (cb) => {
    src([
        slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'src', 'navigation/igviewer.common.js')),
        slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'src', 'navigation/igviewer.renderingService.js')),
        slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'src', 'navigation/nav-initializer.js')),
        slash(path.join(TYPEDOC_THEME.SRC, 'assets','js', 'src', 'versioning/tag-versions.req.js'))
    ])
    .pipe(concat('nav-and-versioning.js'))
    .pipe(dest(slash(path.join(TYPEDOC_THEME.DIST, 'assets', 'js'))));

    cb();
  };

module.exports.buildTypedocTs = series(typedocBuildThemeTS, buildHelpers, typedocMinifyJS);
