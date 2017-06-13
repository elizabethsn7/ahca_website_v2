// ## Globals
<<<<<<< HEAD
var argv         = require('minimist')(process.argv.slice(2));
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();
var changed      = require('gulp-changed');
var concat       = require('gulp-concat');
var flatten      = require('gulp-flatten');
var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var imagemin     = require('gulp-imagemin');
var jshint       = require('gulp-jshint');
var lazypipe     = require('lazypipe');
var less         = require('gulp-less');
var merge        = require('merge-stream');
var cssNano      = require('gulp-cssnano');
var plumber      = require('gulp-plumber');
var rev          = require('gulp-rev');
var runSequence  = require('run-sequence');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');

// See https://github.com/austinpray/asset-builder
var manifest = require('asset-builder')('./assets/manifest.json');
=======
var gulp = require("gulp");
var bower = require("gulp-bower");
var argv = require("minimist")(process.argv.slice(2));
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();
var changed = require("gulp-changed");
var concat = require("gulp-concat");
var flatten = require("gulp-flatten");
var gulpif = require("gulp-if");
var imagemin = require("gulp-imagemin");
var jshint = require("gulp-jshint");
var lazypipe = require("lazypipe");
var less = require("gulp-less");
var merge = require("merge-stream");
var cssNano = require("gulp-cssnano");
var plumber = require("gulp-plumber");
var rev = require("gulp-rev");
var runSequence = require("run-sequence");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");


// See https://github.com/austinpray/asset-builder
var manifest = require("asset-builder")("./assets/manifest.json");
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b

// `path` - Paths to base asset directories. With trailing slashes.
// - `path.source` - Path to the source files. Default: `assets/`
// - `path.dist` - Path to the build directory. Default: `dist/`
var path = manifest.paths;

// `config` - Store arbitrary configuration values here.
var config = manifest.config || {};

// `globs` - These ultimately end up in their respective `gulp.src`.
// - `globs.js` - Array of asset-builder JS dependency objects. Example:
//   ```
//   {type: 'js', name: 'main.js', globs: []}
//   ```
// - `globs.css` - Array of asset-builder CSS dependency objects. Example:
//   ```
//   {type: 'css', name: 'main.css', globs: []}
//   ```
// - `globs.fonts` - Array of font path globs.
// - `globs.images` - Array of image path globs.
// - `globs.bower` - Array of all the main Bower files.
var globs = manifest.globs;

// `project` - paths to first-party assets.
// - `project.js` - Array of first-party JS assets.
// - `project.css` - Array of first-party CSS assets.
var project = manifest.getProjectGlobs();

// CLI options
var enabled = {
  // Enable static asset revisioning when `--production`
  rev: argv.production,
  // Disable source maps when `--production`
  maps: !argv.production,
  // Fail styles task on error when `--production`
  failStyleTask: argv.production,
  // Fail due to JSHint warnings only when `--production`
  failJSHint: argv.production,
  // Strip debug statments from javascript when `--production`
  stripJSDebug: argv.production
};

// Path to the compiled assets manifest in the dist directory
<<<<<<< HEAD
var revManifest = path.dist + 'assets.json';
=======
var revManifest = path.dist + "assets.json";
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b

// ## Reusable Pipelines
// See https://github.com/OverZealous/lazypipe

// ### CSS processing pipeline
// Example
// ```
// gulp.src(cssFiles)
//   .pipe(cssTasks('main.css')
//   .pipe(gulp.dest(path.dist + 'styles'))
// ```
var cssTasks = function(filename) {
  return lazypipe()
    .pipe(function() {
      return gulpif(!enabled.failStyleTask, plumber());
    })
    .pipe(function() {
      return gulpif(enabled.maps, sourcemaps.init());
    })
    .pipe(function() {
<<<<<<< HEAD
      return gulpif('*.less', less());
    })
    .pipe(function() {
      return gulpif('*.scss', sass({
        outputStyle: 'nested', // libsass doesn't support expanded yet
        precision: 10,
        includePaths: ['.'],
        errLogToConsole: !enabled.failStyleTask
      }));
    })
    .pipe(concat, filename)
    .pipe(autoprefixer, {
      browsers: [
        'last 2 versions',
        'android 4',
        'opera 12'
      ]
=======
      return gulpif("*.less", less());
    })
    .pipe(function() {
      return gulpif(
        "*.scss",
        sass({
          outputStyle: "nested", // libsass doesn't support expanded yet
          precision: 10,
          includePaths: ["."],
          errLogToConsole: !enabled.failStyleTask
        })
      );
    })
    .pipe(concat, filename)
    .pipe(autoprefixer, {
      browsers: ["last 2 versions", "android 4", "opera 12"]
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
    })
    .pipe(cssNano, {
      safe: true
    })
    .pipe(function() {
      return gulpif(enabled.rev, rev());
    })
    .pipe(function() {
<<<<<<< HEAD
      return gulpif(enabled.maps, sourcemaps.write('.', {
        sourceRoot: 'assets/styles/'
      }));
=======
      return gulpif(
        enabled.maps,
        sourcemaps.write(".", {
          sourceRoot: "assets/styles/"
        })
      );
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
    })();
};

// ### JS processing pipeline
// Example
// ```
// gulp.src(jsFiles)
//   .pipe(jsTasks('main.js')
//   .pipe(gulp.dest(path.dist + 'scripts'))
// ```
var jsTasks = function(filename) {
  return lazypipe()
    .pipe(function() {
      return gulpif(enabled.maps, sourcemaps.init());
    })
    .pipe(concat, filename)
    .pipe(uglify, {
      compress: {
<<<<<<< HEAD
        'drop_debugger': enabled.stripJSDebug
=======
        drop_debugger: enabled.stripJSDebug
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
      }
    })
    .pipe(function() {
      return gulpif(enabled.rev, rev());
    })
    .pipe(function() {
<<<<<<< HEAD
      return gulpif(enabled.maps, sourcemaps.write('.', {
        sourceRoot: 'assets/scripts/'
      }));
=======
      return gulpif(
        enabled.maps,
        sourcemaps.write(".", {
          sourceRoot: "assets/scripts/"
        })
      );
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
    })();
};

// ### Write to rev manifest
// If there are any revved files then write them to the rev manifest.
// See https://github.com/sindresorhus/gulp-rev
var writeToManifest = function(directory) {
  return lazypipe()
    .pipe(gulp.dest, path.dist + directory)
<<<<<<< HEAD
    .pipe(browserSync.stream, {match: '**/*.{js,css}'})
=======
    .pipe(browserSync.stream, {
      match: "**/*.{js,css}"
    })
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
    .pipe(rev.manifest, revManifest, {
      base: path.dist,
      merge: true
    })
    .pipe(gulp.dest, path.dist)();
};

// ## Gulp tasks
// Run `gulp -T` for a task summary

// ### Styles
// `gulp styles` - Compiles, combines, and optimizes Bower CSS and project CSS.
// By default this task will only log a warning if a precompiler error is
// raised. If the `--production` flag is set: this task will fail outright.
<<<<<<< HEAD
gulp.task('styles', ['wiredep'], function() {
  var merged = merge();
  manifest.forEachDependency('css', function(dep) {
    var cssTasksInstance = cssTasks(dep.name);
    if (!enabled.failStyleTask) {
      cssTasksInstance.on('error', function(err) {
        console.error(err.message);
        this.emit('end');
      });
    }
    merged.add(gulp.src(dep.globs, {base: 'styles'})
      .pipe(cssTasksInstance));
  });
  return merged
    .pipe(writeToManifest('styles'));
=======
gulp.task("styles", ["wiredep"], function() {
  var merged = merge();
  manifest.forEachDependency("css", function(dep) {
    var cssTasksInstance = cssTasks(dep.name);
    if (!enabled.failStyleTask) {
      cssTasksInstance.on("error", function(err) {
        console.error(err.message);
        this.emit("end");
      });
    }
    merged.add(
      gulp
        .src(dep.globs, {
          base: "styles"
        })
        .pipe(cssTasksInstance)
    );
  });
  return merged.pipe(writeToManifest("styles"));
});

gulp.task("autoprefixer", function() {
  var postcss = require("gulp-postcss");
  var sourcemaps = require("gulp-sourcemaps");
  var autoprefixer = require("autoprefixer");

  return gulp
    .src("./src/*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dest"));
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
});

// ### Scripts
// `gulp scripts` - Runs JSHint then compiles, combines, and optimizes Bower JS
// and project JS.
<<<<<<< HEAD
gulp.task('scripts', ['jshint'], function() {
  var merged = merge();
  manifest.forEachDependency('js', function(dep) {
    merged.add(
      gulp.src(dep.globs, {base: 'scripts'})
        .pipe(jsTasks(dep.name))
    );
  });
  return merged
    .pipe(writeToManifest('scripts'));
=======
gulp.task("scripts", ["jshint"], function() {
  var merged = merge();
  manifest.forEachDependency("js", function(dep) {
    merged.add(
      gulp
        .src(dep.globs, {
          base: "scripts"
        })
        .pipe(jsTasks(dep.name))
    );
  });
  return merged.pipe(writeToManifest("scripts"));
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
});

// ### Fonts
// `gulp fonts` - Grabs all the fonts and outputs them in a flattened directory
// structure. See: https://github.com/armed/gulp-flatten
<<<<<<< HEAD
gulp.task('fonts', function() {
  return gulp.src(globs.fonts)
    .pipe(flatten())
    .pipe(gulp.dest(path.dist + 'fonts'))
=======
gulp.task("fonts", function() {
  return gulp
    .src(globs.fonts)
    .pipe(flatten())
    .pipe(gulp.dest(path.dist + "fonts"))
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
    .pipe(browserSync.stream());
});

// ### Images
// `gulp images` - Run lossless compression on all the images.
<<<<<<< HEAD
gulp.task('images', function() {
  return gulp.src(globs.images)
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
    }))
    .pipe(gulp.dest(path.dist + 'images'))
=======
gulp.task("images", function() {
  return gulp
    .src(globs.images)
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        svgoPlugins: [
          {
            removeUnknownsAndDefaults: false
          },
          {
            cleanupIDs: false
          }
        ]
      })
    )
    .pipe(gulp.dest(path.dist + "images"))
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
    .pipe(browserSync.stream());
});

// ### JSHint
// `gulp jshint` - Lints configuration JSON and project JS.
<<<<<<< HEAD
gulp.task('jshint', function() {
  return gulp.src([
    'bower.json', 'gulpfile.js'
  ].concat(project.js))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(gulpif(enabled.failJSHint, jshint.reporter('fail')));
=======
gulp.task("jshint", function() {
  return gulp
    .src(["bower.json", "gulpfile.js"].concat(project.js))
    .pipe(jshint())
    .pipe(jshint.reporter("jshint-stylish"))
    .pipe(gulpif(enabled.failJSHint, jshint.reporter("fail")));
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
});

// ### Clean
// `gulp clean` - Deletes the build folder entirely.
<<<<<<< HEAD
gulp.task('clean', require('del').bind(null, [path.dist]));
=======
gulp.task("clean", require("del").bind(null, [path.dist]));
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b

// ### Watch
// `gulp watch` - Use BrowserSync to proxy your dev server and synchronize code
// changes across devices. Specify the hostname of your dev server at
// `manifest.config.devUrl`. When a modification is made to an asset, run the
// build step for that asset and inject the changes into the page.
// See: http://www.browsersync.io
<<<<<<< HEAD
gulp.task('watch', function() {
  browserSync.init({
    files: ['{lib,templates}/**/*.php', '*.php'],
    proxy: config.devUrl,
    snippetOptions: {
      whitelist: ['/wp-admin/admin-ajax.php'],
      blacklist: ['/wp-admin/**']
    }
  });
  gulp.watch([path.source + 'styles/**/*'], ['styles']);
  gulp.watch([path.source + 'scripts/**/*'], ['jshint', 'scripts']);
  gulp.watch([path.source + 'fonts/**/*'], ['fonts']);
  gulp.watch([path.source + 'images/**/*'], ['images']);
  gulp.watch(['bower.json', 'assets/manifest.json'], ['build']);
=======
gulp.task("watch", function() {
  browserSync.init({
    files: ["{lib,templates}/**/*.php", "*.php"],
    proxy: config.devUrl,
    snippetOptions: {
      whitelist: ["/wp-admin/admin-ajax.php"],
      blacklist: ["/wp-admin/**"]
    }
  });
  gulp.watch([path.source + "styles/**/*"], ["styles"]);
  gulp.watch([path.source + "scripts/**/*"], ["jshint", "scripts"]);
  gulp.watch([path.source + "fonts/**/*"], ["fonts"]);
  gulp.watch([path.source + "images/**/*"], ["images"]);
  gulp.watch(["bower.json", "assets/manifest.json"], ["build"]);
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
});

// ### Build
// `gulp build` - Run all the build tasks but don't clean up beforehand.
// Generally you should be running `gulp` instead of `gulp build`.
<<<<<<< HEAD
gulp.task('build', function(callback) {
  runSequence('styles',
              'scripts',
              ['fonts', 'images'],
              callback);
=======
gulp.task("build", function(callback) {
  runSequence("styles", "scripts", ["fonts", "images"], callback);
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
});

// ### Wiredep
// `gulp wiredep` - Automatically inject Less and Sass Bower dependencies. See
// https://github.com/taptapship/wiredep
<<<<<<< HEAD
gulp.task('wiredep', function() {
  var wiredep = require('wiredep').stream;
  return gulp.src(project.css)
    .pipe(wiredep())
    .pipe(changed(path.source + 'styles', {
      hasChanged: changed.compareSha1Digest
    }))
    .pipe(gulp.dest(path.source + 'styles'));
=======
gulp.task("wiredep", function() {
  var wiredep = require("wiredep").stream;
  return gulp
    .src(project.css)
    .pipe(wiredep())
    .pipe(
      changed(path.source + "styles", {
        hasChanged: changed.compareSha1Digest
      })
    )
    .pipe(gulp.dest(path.source + "styles"));
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
});

// ### Gulp
// `gulp` - Run a complete build. To compile for production run `gulp --production`.
<<<<<<< HEAD
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
/* !!!! CONFIGURE !!!!
================================ */
// var options = {};
// options.user = 'root';
// options.port = 8888;
// options.site_path = '/Users/ParkerandEvan/Sites/ahca_website_v2'; // something like /Users/username/sites/mymampsite  
 
// Modules 
var gulp = require('gulp');
var mamp = require('gulp-mamp');
 
gulp.task('config', function(cb){
    mamp(options, 'config', cb);
});
 
gulp.task('start', function(cb){
    mamp(options, 'start', cb);
});
 
gulp.task('stop', function(cb){
    mamp(options, 'stop', cb);
});
 
gulp.task('mamp', ['config', 'start']);
=======
gulp.task("default", ["clean"], function() {
  gulp.start("build");
});

gulp.task('bower', function() {
  return bower();
});
/* !!!! CONFIGURE !!!!
================================ */
var options = {};
options.user = "root";
options.port = 8888;
options.site_path = "/Users/elizabethskipp/Sites/ahca_website_v2"; // something like /Users/username/sites/mymampsite

// Modules
var gulp = require("gulp");
var mamp = require("gulp-mamp");

gulp.task("config", function(cb) {
  mamp(options, "config", cb);
});

gulp.task("start", function(cb) {
  mamp(options, "start", cb);
});

gulp.task("stop", function(cb) {
  mamp(options, "stop", cb);
});

gulp.task("mamp", ["config", "start"]);
>>>>>>> c52efe61a11c8ce3798b89bbd0957db9fd12048b
