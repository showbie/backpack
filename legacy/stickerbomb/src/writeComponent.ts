import * as path from 'path';

import fs from 'fs-extra';

import { emberWrapper, reactWrapper } from './templates';
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
  let filename = {
    ember: 'component.js',
    react: `${iconName}.tsx`,
  };
  let template = {
    ember: emberWrapper(svgComponentName, iconName),
    react: reactWrapper(svgComponentName, iconName),
  };

  let templateFileIfMissing = async (
    relativePath: string,
    contents: string
  ) => {
    let filePath = path.join(iconDir, relativePath);

    if (!(await fs.pathExists(filePath))) {
      await fs.writeFile(filePath, `${contents}\n`, 'utf-8');
    }
  };

  await templateFileIfMissing(filename[format], template[format]);
}
