import * as path from 'path';

import ora from 'ora';
import sade from 'sade';

import { generateIcons } from './generateIcons';
import { removeExisting } from './removeExisting';
import { sortFilePaths } from './sortFilePaths';
import { writeIndex } from './writeIndex';

const { version } = require('../package.json');

/**
 * Basic CLI setup.
 *
 * @see https://github.com/lukeed/sade
 * @see https://github.com/sindresorhus/ora
 */
sade('stickerbomb [src] [dest]', true)
  .version(version)
  .describe('Generate icon components from SVG artwork')
  .option('-f, --format', 'Sets the component framework (ember|react)', 'react')
  .action(async (src, dest, opts) => {
    let filesIn = src || 'icons/**/*.svg';
    let filesOut = dest || 'components/icons';
    let { format } = opts;

    let filesSet = filesIn;
    let spinner = ora().start();

    try {
      spinner.start('Removing existing components...');

      await removeExisting(filesOut, format);

      spinner.succeed('Removing existing components... DONE');
    } catch (error) {
      spinner.fail('Removing existing components... FAILED');
    }

    try {
      spinner.start('Reticulating splines...');

      filesSet = await sortFilePaths(filesIn);
      await generateIcons(filesSet, filesOut, format);

      spinner.succeed('Reticulating splines... DONE');
    } catch (error) {
      spinner.fail('Reticulating splines... FAILED');
      throw new Error(error);
    }

    if (format === 'react') {
      try {
        spinner.start('Writing component index...');

        Object.keys(filesSet).forEach(async (set) => {
          await writeIndex(path.join(filesOut, set));
        });

        spinner.succeed('Writing component index... DONE');
      } catch (error) {
        spinner.fail('Writing component index... FAILED');
      }
    }
  })
  .parse(process.argv);
