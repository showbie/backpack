import * as path from 'path';

import dedent from 'dedent';
import fs from 'fs-extra';

import { FormatOption } from './types';

const EXTENSIONS = {
  ember: 'hbs',
  react: 'tsx',
};

export async function writeSVG(
  iconDir: string,
  svgComponentName: string,
  svgComponent: string,
  format: FormatOption
): Promise<void> {
  let ext = EXTENSIONS[format];

  await fs.writeFile(
    path.join(iconDir, `${svgComponentName}.${ext}`),
    svgComponent,
    { encoding: 'utf-8' }
  );
}

export async function writeWrapper(
  iconDir: string,
  iconName: string,
  svgComponentName: string,
  format: FormatOption
): Promise<void> {
  let wrapperFilename = format === 'ember' ? 'component.js' : `${iconName}.tsx`;
  let templateFileIfMissing = async (
    relativePath: string,
    contents: string
  ) => {
    let filePath = path.join(iconDir, relativePath);

    if (!(await fs.pathExists(filePath))) {
      await fs.writeFile(filePath, `${contents}\n`, 'utf-8');
    }
  };

  await templateFileIfMissing(
    wrapperFilename,
    dedent`
      import * as React from 'react';

      import { Box } from '~shared/components/Box';

      import useIcon, { UseIconProps } from '../useIcon';
      import { ${svgComponentName} } from './${svgComponentName}';

      export type ${iconName}Props = UseIconProps;

      export function ${iconName}(props: ${iconName}Props) {
        let iconProps = useIcon(props);

        return <Box tagName={${svgComponentName}} {...iconProps} />;
      };
    `
  );
}
