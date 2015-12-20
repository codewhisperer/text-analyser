module.exports = {
  scripts: {
    files: ['app/**/*.js', 'app/**/*.html', 'index.html'],
    tasks: ['webpack']
  },
  options: {
    livereload: true,
  }
};
