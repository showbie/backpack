const fs = require('fs');
const path = require('path');

const chroma = require('chroma-js');
const Handlebars = require('handlebars');

function alphaHex(hex) {
  let alpha = chroma(hex).alpha();
  return `${Math.ceil(alpha * 255).toString(16)}${hex.substring(1)}`;
}

Handlebars.registerHelper('alphahex', (a) => alphaHex(a));

class BaseBuilder {
  constructor(colors, version) {
    this.colors = colors;
    this.version = version;
  }

  build(file, outputPaths, extraData = {}) {}
}

class ColorBuilder extends BaseBuilder {
  constructor(
    colors,
    version,
    templatesDir = path.join(__dirname, '..', 'src', 'templates')
  ) {
    super(...arguments);

    this.templatesDir = templatesDir;
    this.colorsArray = Object.keys(colors)
      .filter((name) => typeof colors[name] !== 'string')
      .map((name) => ({ name, scale: colors[name] }));
  }

  build(file, outputPaths, extraData = {}) {
    const template = fs.readFileSync(
      path.join(this.templatesDir, `${file}.hbs`),
      { encoding: 'utf8' }
    );
    const compile = Handlebars.compile(template);

    const compiled = compile({
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
