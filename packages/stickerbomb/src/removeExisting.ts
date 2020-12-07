import * as path from 'path';

import fs from 'fs-extra';
import globby from 'globby';

export async function removeExisting(componentsDir: string): Promise<void> {
  let existingComponentPaths = await globby(
    path.join(componentsDir, '*/*Svg.tsx'),
    { absolute: true }
  );

  await Promise.all(
    existingComponentPaths.map(async (existingComponentPath) => {
      await fs.remove(existingComponentPath);
    })
  );
}
