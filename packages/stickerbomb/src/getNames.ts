import { paramCase, pascalCase } from 'change-case';

import { FormatOption } from './types';

type GetNamesReturn = {
  iconName: string;
  svgComponentName: string;
};

export function getNames(
  svgName: string,
  variantName: string,
  format: FormatOption
): GetNamesReturn {
  let iconName = '';
  let svgComponentName = '';

  switch (format) {
    case 'ember':
      iconName = `icon-${paramCase(svgName)}`;
      svgComponentName = `${paramCase(svgName)}${
        variantName ? `-${paramCase(variantName)}` : ''
      }-svg`;

      return { iconName, svgComponentName };

    case 'react':
    default:
      iconName = `Icon${pascalCase(svgName)}`;
      svgComponentName = `${iconName}${
        variantName ? pascalCase(variantName) : ''
      }Svg`;

      return { iconName, svgComponentName };
  }
}
