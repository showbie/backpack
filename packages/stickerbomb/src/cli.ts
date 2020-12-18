import ora from 'ora';
import sade from 'sade';

import { generateIcons } from './generateIcons';
import { removeExisting } from './removeExisting';
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
    let filesIn = src || 'icons/*.svg';
    let filesOut = dest || 'components/icons';
    let { format } = opts;

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

      await generateIcons(filesIn, filesOut, format);

      spinner.succeed('Reticulating splines... DONE');
    } catch (error) {
      spinner.fail('Reticulating splines... FAILED');
      throw new Error(error);
    }

    if (format === 'react') {
      try {
        spinner.start('Writing component index...');

        await writeIndex(filesOut);

        spinner.succeed('Writing component index... DONE');
      } catch (error) {
        spinner.fail('Writing component index... FAILED');
      }
    }
  })
  .parse(process.argv);