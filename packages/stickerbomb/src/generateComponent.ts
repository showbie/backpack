import svgr from '@svgr/core';

import { svge } from './svgToHtmlbars';
import { FormatOption } from './types';

const componentTemplate = (tmpl) => (
  { template },
  opts,
  { componentName, jsx }
) => {
  let code = tmpl
    ? tmpl
    : `
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

const svgrConfig = (tmpl) => ({
  svgProps: {
    focusable: 'false',
    fill: 'currentColor',
  },
  replaceAttrValues: { '#000': 'currentColor' },
  template: componentTemplate(tmpl),
  plugins: ['@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  titleProp: true,
});

export async function generateComponent(
  svg: string,
  svgComponentName: string,
  format: FormatOption,
  config: any
): Promise<string> {
  switch (format) {
    case 'ember':
      return await svge(svg);

    case 'react':
    default:
      return await svgr(svg, svgrConfig(config.react.svgTemplate), {
        componentName: svgComponentName,
        jsx: null,
      });
  }
}
