import svgr from '@svgr/core';

import { svge } from './svgToHtmlbars';
import { FormatOption } from './types';

const componentTemplate = ({ template }, opts, { componentName, jsx }) => {
  let code = `
    import * as React from 'react';
    NEWLINE
    import { SVGProps } from '../types';
    NEWLINE
    export const COMPONENT_NAME = ({ title, titleId, ...props }: SVGProps) => COMPONENT_JSX;
  `;

  let reactTemplate = template.smart(code, {
    plugins: ['react', 'typescript'],
  });

  return reactTemplate({
    COMPONENT_NAME: componentName,
    COMPONENT_JSX: jsx,
    NEWLINE: '\n',
  });
};

const svgrConfig = {
  svgProps: {
    focusable: 'false',
    fill: 'currentColor',
  },
  replaceAttrValues: { '#000': 'currentColor' },
  template: componentTemplate,
  plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  titleProp: true,
};

export async function generateComponent(
  svg: string,
  svgComponentName: string,
  format: FormatOption
): Promise<string> {
  switch (format) {
    case 'ember':
      return await svge(svg);

    case 'react':
    default:
      return await svgr(svg, svgrConfig, {
        componentName: svgComponentName,
        jsx: null,
      });
  }
}
