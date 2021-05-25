const { src, dest} = require('gulp');
const path = require('path');
const slash = require('slash');
const ts = require('gulp-typescript');
const { series } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

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

const typedocCopyStyles = () => {
  const prefixer = postcss([autoprefixer({
    overrideBrowserslist: ['last 5 versions', '> 3%'],
    cascade: false,
    grid: false
  })]);

  return src(slash(path.join(TYPEDOC_THEME.SRC, TYPEDOC_THEME.STYLES.ENTRY)))
    .pipe(sourcemaps.init())
    .pipe(sass.sync(TYPEDOC_THEME.STYLES.CONFIG).on('error', sass.logError))
    .pipe(prefixer)
    .pipe(sourcemaps.write('./'))
    .pipe(dest(slash(path.join(TYPEDOC_THEME.DIST, TYPEDOC_THEME.STYLES.OUT))));
};

module.exports.buildTypedocTs = series(typedocBuildThemeTS, buildHelpers, typedocCopyStyles);