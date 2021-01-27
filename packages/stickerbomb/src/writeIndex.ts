import * as path from 'path';

import fs from 'fs-extra';

import { IconSets } from './types';

export async function writeIndex(
  iconSets: IconSets,
  componentsDir: string
): Promise<void> {
  Object.entries(iconSets).forEach(async ([subpath, setPaths]) => {
    await Promise.all(
      setPaths.map(async (setDir) => {
        let filePath = path.join(componentsDir, setDir);
        let componentNames = (await fs.readdir(filePath)).filter(
          // Only include directories that contain an icon, e.g. exclude '__snapshots__'
          (fileOrDir) => !fileOrDir.includes('.') && fileOrDir.includes('Icon')
        );
        let iconExports = componentNames
          .map((componentFile) => path.basename(componentFile, '.tsx'))
          .map(
            (component) =>
              `export { ${component} } from './${component}/${component}';`
          )
          .join('\n')
          .concat('\n');
        let iconsIndexPath = path.join(componentsDir, 'index.ts');

        await fs.writeFile(iconsIndexPath, iconExports, 'utf-8');
      })
    );
  });
}
