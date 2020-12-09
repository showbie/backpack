import ora from 'ora';
import sade from 'sade';

import { generateIcons } from './generateIcons';
import { removeExisting } from './removeExisting';
import { writeIndex } from './writeIndex';

sade('stickerbomb [src] [dest]', true)
  .version('1.0.0')
  .describe('Generate icon components from SVG artwork')
  .action(async (src, dest, opts) => {
    let filesIn = src || 'icons/*.svg';
    let filesOut = dest || 'components/icons';

    // console.log(filesIn, filesOut, opts);

    let spinner = ora().start();

    try {
      spinner.start('Removing existing components...');

      await removeExisting(filesOut);

      spinner.succeed('Removing existing components... DONE');
    } catch (error) {
      spinner.fail('Removing existing components... FAILED')
    }

    try {
      spinner.start('Reticulating splines...')

      await generateIcons(filesIn, filesOut);

      spinner.succeed('Reticulating splines... DONE');
    } catch (error) {
      spinner.fail('Reticulating splines... FAILED')
    }

    try {
      spinner.start('Writing component index...')

      await writeIndex(filesOut)

      spinner.succeed('Writing component index... DONE');
    } catch (error) {
      spinner.fail('Writing component index... FAILED')
    }
  })
  .parse(process.argv);
