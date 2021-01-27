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
  let existingComponentPaths = [];

  Object.values(iconSets).forEach(async (setPaths) => {
    setPaths.map(async (filePath) => {
      existingComponentPaths.push(
        await globby(
          path.join(componentsDir, filePath, GENERATED_FILES[format]),
          {
            absolute: true,
          }
        )
      );
    });
  });

  await Promise.all(
    existingComponentPaths.map(async (existingComponentPath) => {
      console.log('[remove] path:', existingComponentPath);
      await fs.remove(existingComponentPath);
    })
  );
}
