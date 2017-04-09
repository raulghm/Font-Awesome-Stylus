exports = module.exports = plugin;

exports.path = __dirname;

function plugin() {
  return function(style) {
    style.include(__dirname);
  }
}
