import * as path from 'path';

import cheerio from 'cheerio';
import fs from 'fs-extra';
import SVGO from 'svgo';

import { generateComponent } from './generateComponent';
import { getNames } from './getNames';
import { FormatOption, IconSets } from './types';
import { writeSVG, writeWrapper } from './writeComponent';

/** @see https://github.com/svg/svgo#what-it-can-do */
const svgo = new SVGO({
  // @ts-expect-error -- This property is missing from SVGO types.
  multipass: true,
  plugins: [
    {
      inlineStyles: {
        onlyMatchedOnce: false,
      },
    },
    { removeXMLNS: true },
    { removeViewBox: false },
    { convertStyleToAttrs: true },
    { sortAttrs: true },
    { removeAttrs: { attrs: 'fill' } },
  ],
});

export async function generateIcons(
  iconSets: IconSets,
  componentsDir: string,
  format: FormatOption,
  config: any
): Promise<void> {
  try {
    for await (const [subpath, setPaths] of Object.entries(iconSets)) {
      for await (const svgFilePath of setPaths) {
        // Split out the icon variants (e.g. star-active.svg)
        let [svgName, variantName] = path
          .basename(svgFilePath, '.svg')
          .split('-');

        let rawSvg = await fs.readFile(svgFilePath, 'utf-8');
        let svg = rawSvg.replace(/ data-name=".*?"/g, '');

        // Run through SVGO
        let optimisedSvg = (await svgo.optimize(svg)).data;

        // Validate SVG before import
        let $ = cheerio.load(optimisedSvg);
        $('svg *').each((i, el) => {
          let $el = $(el);

          // Validate color attributes
          ['stroke', 'fill'].forEach((attr) => {
            let color = $el.attr(attr);
            let validColors = ['currentColor', 'none', '#000'];

            if (color && !validColors.includes(color)) {
              throw new Error(
                `${svgName}: Invalid ${attr} color: ${$.html(el)}`
              );
            }
          });
        });

        let { iconName, svgComponentName } = getNames(
          svgName,
          variantName,
          format
        );

        let svgComponent = await generateComponent(
          optimisedSvg,
          svgComponentName,
          format,
          config
        );

        // Create icon directory if it's missing
        let iconDir = path.join(componentsDir, subpath, iconName);
        await fs.mkdirp(iconDir);

        // Write SVG component
        await writeSVG(iconDir, svgComponentName, svgComponent, format);

        /**
         * Bail out early if we're processing a variant
         * (e.g. star-active.svg) All subsequent steps should only
         * happen once per icon component.
         */
        if (!variantName) {
          // Create icon wrapper component, if it doesn't already exist
          await writeWrapper(iconDir, iconName, svgComponentName, format);
        }
      }
    }

    return Promise.resolve();
  } catch (error) {
    throw new Error(error);
  }
}
