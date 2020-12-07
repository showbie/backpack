import * as path from 'path';

import svgr from '@svgr/core';
import { pascalCase } from 'change-case';
import cheerio from 'cheerio';
import dedent from 'dedent';
import fs from 'fs-extra';
import globby from 'globby';
import SVGO from 'svgo';

const componentTemplate = ({ template }, opts, { componentName, jsx }) => {
  const code = `
    import React from 'react';
    NEWLINE
    import { SVGProps } from '../SVGTypes';
    NEWLINE
    export const COMPONENT_NAME = ({ title, titleId, ...props }: SVGProps) => COMPONENT_JSX;
  `;

  const reactTemplate = template.smart(code, {
    plugins: ['react', 'typescript'],
  });

  return reactTemplate({
    COMPONENT_NAME: componentName,
    COMPONENT_JSX: jsx,
    NEWLINE: '\n',
  });
};

const svgo = new SVGO({
  // @ts-expect-error -- This property is missing from SVGO types.
  multipass: true,
  plugins: [
    { removeViewBox: false },
    {
      inlineStyles: {
        onlyMatchedOnce: false,
      },
    },
    { convertStyleToAttrs: true },
  ],
});

const svgrConfig = {
  svgProps: {
    focusable: 'false',
    fill: 'currentColor',
    width: 16,
    height: 16,
  },
  replaceAttrValues: { '#000': 'currentColor' },
  template: componentTemplate,
  plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  titleProp: true,
};

// const baseDir = path.join(__dirname, '..');
// const iconComponentsDir = path.join(baseDir, 'lib/components/icons');

export async function generateIcons(
  iconsDir: string,
  componentsDir: string
): Promise<void> {
  let svgFilePaths = await globby(iconsDir, {
    absolute: true,
  });

  await Promise.all(
    svgFilePaths.map(async (svgFilePath) => {
      // Split out the icon variants (e.g. bookmark-active.svg)
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
            throw new Error(`${svgName}: Invalid ${attr} color: ${$.html(el)}`);
          }
        });
      });

      let iconName = `Icon${pascalCase(svgName)}`;
      let svgComponentName = `${iconName}${
        variantName ? pascalCase(variantName) : ''
      }Svg`;
      let svgComponent = await svgr(optimisedSvg, svgrConfig, {
        componentName: svgComponentName,
        jsx: null,
      });

      // Create icon directory if it's missing
      let iconDir = path.join(componentsDir, iconName);
      await fs.mkdirp(iconDir);

      // Write SVG React component
      await fs.writeFile(
        path.join(iconDir, `${svgComponentName}.tsx`),
        svgComponent,
        { encoding: 'utf-8' }
      );

      // Bail out early if we're processing an icon variant (e.g. bookmark-active.svg)
      // All subsequent steps should only happen once per icon component.
      if (variantName) return;

      let templateFileIfMissing = async (
        relativePath: string,
        contents: string
      ) => {
        let filePath = path.join(iconDir, relativePath);

        if (!(await fs.pathExists(filePath))) {
          await fs.writeFile(filePath, `${contents}\n`, 'utf-8');
        }
      };

      // Create icon wrapper component, if it doesn't already exist
      await templateFileIfMissing(
        `${iconName}.tsx`,
        dedent`
          import React from 'react';
          import { Box } from '../../Box/Box';
          import useIcon, { UseIconProps } from '../../../hooks/useIcon';
          import { ${svgComponentName} } from './${svgComponentName}';

          export type ${iconName}Props = UseIconProps;

          export const ${iconName} = (props: ${iconName}Props) => {
            const iconProps = useIcon(props);

            return <Box component={${svgComponentName}} {...iconProps} />;
          };
        `
      );
    })
  );
}
