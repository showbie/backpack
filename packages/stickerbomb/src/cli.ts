import ora from 'ora';
import sade from 'sade';

import { generateIcons } from './generateIcons';
import { removeExisting } from './removeExisting';
import { writeIndex } from './writeIndex';

sade('stickerbomb [src] [dest]', true)
  .version('1.0.0')
  .describe('Generate icon components from SVG artwork')
  .action((src, dest, opts) => {
    let filesIn = src || 'icons/*.svg';
    let filesOut = dest || 'components/icons';

    console.log(filesIn, filesOut, opts);

    ora.promise(removeExisting(filesOut), 'Removing existing components...');
    ora.promise(generateIcons(filesIn, filesOut), 'Reticulating splines...');
    ora.promise(writeIndex(filesOut), 'Writing component index...');
  })
  .parse(process.argv);
