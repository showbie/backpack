import * as path from 'path';

import globby from 'globby';

import { IconSets } from './types';

export async function sortFilePaths(iconsDir: string): Promise<IconSets> {
  let svgFilePaths = await globby(iconsDir, {
    absolute: true,
  });
  let rootPath = path.parse(path.parse(iconsDir).dir).dir;
  let iconSets = svgFilePaths.reduce((acc, cur) => {
    let pathParts = cur.split(path.sep);
    let subpath = path.join(
      ...pathParts.slice(pathParts.indexOf(rootPath) + 1, pathParts.length - 1)
    );

    if (!acc[subpath]) {
      acc = { ...acc, [subpath]: [] };
    }

    acc[subpath].push(cur);

    return acc;
  }, {} as IconSets);

  return iconSets;
}
