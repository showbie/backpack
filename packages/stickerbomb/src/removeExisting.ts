import * as path from 'path';

import fs from 'fs-extra';
import globby from 'globby';

import { FormatOption } from './types';

const GENERATED_FILES = {
  ember: '*/*-svg.hbs',
  react: '*/*Svg.tsx',
};

export async function removeExisting(
  componentsDir: string,
  format: FormatOption
): Promise<void> {
  let existingComponentPaths = await globby(
    path.join(componentsDir, GENERATED_FILES[format]),
    { absolute: true }
  );

  await Promise.all(
    existingComponentPaths.map(async (existingComponentPath) => {
      await fs.remove(existingComponentPath);
    })
  );
}
