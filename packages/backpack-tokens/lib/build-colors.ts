import * as fs from 'fs';
import * as path from 'path';

import chroma from 'chroma-js';
import Handlebars from 'handlebars';

import { capitalize, swiftVarName } from './utils/string';

/**
 * Get floating-point values for each colour channel and return a
 * string for `UIColor()` in Swift.
 */
function rgbFloat(hex: string): string {
  let vals = chroma(hex).gl();
  return `red: ${vals[0]}, green: ${vals[1]}, blue: ${vals[2]}, alpha: ${vals[3]}`;
}

Handlebars.registerHelper('capitalize', (a) => capitalize(a));
Handlebars.registerHelper('rgbfloat', (a) => rgbFloat(a));
Handlebars.registerHelper('swiftvar', (a, b, c) =>
  swiftVarName(a, b, c.replace(/-+/g, '_'))
);

class BaseBuilder {
  colors: Record<string, any>;
  prefix: string;
  version: string;

  constructor(colors, prefix = '', version: string) {
    this.colors = colors;
    this.prefix = prefix;
    this.version = version;
  }
}

export default class ColorBuilder extends BaseBuilder {
  templatesDir: string;
  colorsArray;

  constructor(
    colors,
    prefix: string,
    version: string,
    templatesDir = path.join(__dirname, '..', 'src', 'templates')
  ) {
    super(colors, prefix, version);

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

        return { name, scale, prefix: this.prefix };
      });
  }

  build(file: string, outputPaths: string[]): void {
    let template = fs.readFileSync(
      path.join(this.templatesDir, `${file}.hbs`),
      { encoding: 'utf8' }
    );
    let compile = Handlebars.compile(template);

    let compiled = compile({
      prefix: this.prefix,
      version: this.version,
      colors: this.colorsArray,
      // filter: extraData.filter ? extraData.filter : (color) => color,
    });

    outputPaths.forEach((outputPath) => {
      if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath));
      }

      fs.writeFileSync(path.join(outputPath), compiled, { flag: 'w' });
    });
  }
}
