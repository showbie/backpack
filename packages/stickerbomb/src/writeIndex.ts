import * as path from 'path';

import fs from 'fs-extra';

export async function writeIndex(componentsDir: string): Promise<void> {
  let componentNames = (await fs.readdir(componentsDir)).filter(
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
}
