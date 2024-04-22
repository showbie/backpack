import * as path from 'path';

import fs from 'fs-extra';
import globby from 'globby';

import { FormatOption, IconSets } from './types';

const GENERATED_FILES = {
  ember: '*/*-svg.hbs',
  react: '*/*Svg.tsx',
};

export async function removeExisting(
  iconSets: IconSets,
  componentsDir: string,
  format: FormatOption
): Promise<void> {
  try {
    let existingComponentPaths = [];

    for await (const setPath of Object.keys(iconSets)) {
      existingComponentPaths = [
        ...existingComponentPaths,
        ...(await globby(
          path.join(componentsDir, setPath, GENERATED_FILES[format]),
          { absolute: true }
        )),
      ];
    }

    for await (const path of existingComponentPaths) {
      await fs.remove(path);
    }

    return Promise.resolve();
  } catch (error) {
    throw new Error(error);
  }
}
