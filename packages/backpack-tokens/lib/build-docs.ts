import * as fs from 'fs';
import * as path from 'path';

import chroma from 'chroma-js';
import Handlebars from 'handlebars';

import { getColorName, getHslString } from './utils/color';
import { capitalize, swiftVarName } from './utils/string';

Handlebars.registerHelper('capitalize', (a) => capitalize(a));
Handlebars.registerHelper('swiftvar', (a, b, c) =>
  swiftVarName(a, b, c.replace(/-+/g, '_'))
);

export default class ColorDocsBuilder {
  palettes: Record<string, any> = {};
  templatesDir: string;
  themes: any;

  constructor(
    palettes: Record<string, any>,
    templatesDir = path.join(__dirname, 'templates')
  ) {
    this.templatesDir = templatesDir;

    this.themes = Object.keys(palettes).map((theme) => {
      let { prefix, colors } = palettes[theme];
      let hues = Object.keys(colors);
      let palette = hues.map((hue) => {
        let shades = palettes[theme].colors[hue];

        // Filter out underfined shades.
        Object.keys(shades).forEach((key) => {
          if (shades[key] === '') delete shades[key];
        });

        let scale = Object.entries(shades).map((shade) => {
          // Here's where the magic happens.
          let hex = shade[1] as string;
          let colorObj = chroma(hex);
          let rgb = colorObj.rgb().join(', ');
          let hsl = getHslString(colorObj);
          let name = getColorName(colorObj);
          let scss = `${prefix}-${hue}-${shade[0]}`;
          let swift = swiftVarName(prefix, hue, shade[0].replace(/-+/g, '_'));

          return { shade: shade[0], hex, rgb, hsl, name, scss, swift };
        });

        return { hue, scale };
      });

      return { theme, palette };
    });
  }

  build(file: string, outputPaths: string[]): void {
    let template = fs.readFileSync(
      path.join(this.templatesDir, `${file}.hbs`),
      { encoding: 'utf8' }
    );
    let compile = Handlebars.compile(template);
    let compiled = compile({
      themes: this.themes,
    });

    outputPaths.forEach((outputPath) => {
      if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath));
      }

      fs.writeFileSync(path.join(outputPath), compiled, { flag: 'w' });
    });
  }
}
