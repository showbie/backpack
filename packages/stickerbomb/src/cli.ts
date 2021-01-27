import ora from 'ora';
import sade from 'sade';

import { generateIcons } from './generateIcons';
import { removeExisting } from './removeExisting';
import { sortFilePaths } from './sortFilePaths';
import { writeIndex } from './writeIndex';

// eslint-disable-next-line @typescript-eslint/no-var-requires
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

    let filesSet = await sortFilePaths(filesIn);
    let spinner = ora().start();
    let spinnerMsg = '';

    try {
      spinnerMsg = 'Removing existing components...';
      spinner.start(spinnerMsg);
      await removeExisting(filesSet, filesOut, format);
      spinner.succeed(`${spinnerMsg} DONE`);

      spinnerMsg = 'Reticulating splines...';
      spinner.start(spinnerMsg);
      await generateIcons(filesSet, filesOut, format);
      spinner.succeed(`${spinnerMsg} DONE`);

      spinnerMsg = 'Writing component index...';
      spinner.start(spinnerMsg);
      if (format === 'react') {
        await writeIndex(filesSet, filesOut);
        spinner.succeed(`${spinnerMsg} DONE`);
      } else {
        spinner.info(`${spinnerMsg} SKIPPED`);
      }
    } catch (error) {
      spinner.fail(`${spinnerMsg} FAILED`);
      throw new Error(error);
    }

    // try {
    //   spinner.start(spinnerMessage);

    //   await generateIcons(filesSet, filesOut, format)
    //     .then(() => spinner.succeed(`${spinnerMessage} DONE`))
    //     .then(() => {
    //       spinnerMessage = 'Writing component index...';

    //       if (format === 'react') {
    //         Object.keys(filesSet).forEach(async (set) => {
    //           await writeIndex(path.join(filesOut, set)).catch((err) =>
    //             console.log('[index] promise caught')
    //           );
    //         });
    //         spinner.succeed(`${spinnerMessage} DONE`);
    //       } else {
    //         spinner.info(`${spinnerMessage} SKIPPED`);
    //       }
    //     });
    // } catch (error) {
    //   spinner.fail(`${spinnerMessage} FAILED`);
    //   throw new Error(error);
    // }
  })
  .parse(process.argv);
