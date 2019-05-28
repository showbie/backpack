const fs = require('fs');
const path = require('path');

const chroma = require('chroma-js');
const Handlebars = require('handlebars');

const { swiftVarName } = require('./utils/string');

/**
 * Get floating-point values for each colour channel and return a
 * string for `UIColor()` in Swift.
 *
 * @param {String} hex
 * @returns {String}
 */
function rgbFloat(hex) {
  let vals = chroma(hex).gl();
  return `red: ${vals[0]}, green: ${vals[1]}, blue: ${vals[2]}, alpha: ${
    vals[3]
  }`;
}

Handlebars.registerHelper('rgbfloat', (a) => rgbFloat(a));
Handlebars.registerHelper('swiftvar', (a, b) => swiftVarName(a, b));

class BaseBuilder {
  constructor(colors, prefix = '', version) {
    this.colors = colors;
    this.prefix = prefix;
    this.version = version;
  }

  build(file, outputPaths, extraData = {}) {}
}

class ColorBuilder extends BaseBuilder {
  constructor(
    colors,
    prefix,
    version,
    templatesDir = path.join(__dirname, '..', 'src', 'templates')
  ) {
    super(...arguments);

    this.templatesDir = templatesDir;
    this.colorsArray = Object.keys(colors)
      .filter((name) => typeof colors[name] !== 'string')
      .map((name) => {
        let scale = colors[name];

        Object.keys(scale).forEach(function(key) {
          if (scale[key] === '') {
            delete scale[key];
          }
        });

        return { name, scale };
      });
  }

  build(file, outputPaths, extraData = {}) {
    let template = fs.readFileSync(
      path.join(this.templatesDir, `${file}.hbs`),
      { encoding: 'utf8' }
    );
    let compile = Handlebars.compile(template);

    let compiled = compile({
      prefix: this.prefix,
      version: this.version,
      colors: this.colorsArray,
      filter: extraData.filter ? extraData.filter : (color) => color,
    });

    outputPaths.forEach((outputPath) => {
      if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath));
      }

      fs.writeFileSync(path.join(outputPath), compiled, { flag: 'w' });
    });
  }
}

module.exports = ColorBuilder;
