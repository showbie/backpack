import SHOWBIE from '../src/backpack-showbie';
import SOCRATIVE from '../src/backpack-socrative';

const path = require('path');

const pkg = require('../package.json');
const ColorBuilder = require('./build-colors');

const ShowbieColors = new ColorBuilder(
  SHOWBIE.colors,
  SHOWBIE.prefix,
  pkg.version
);
const SocrativeColors = new ColorBuilder(
  SOCRATIVE.colors,
  SOCRATIVE.prefix,
  pkg.version
);

ShowbieColors.build('showbie-color.scss', [
  path.join(__dirname, '..', 'dist', 'showbie-color.scss'),
]);
ShowbieColors.build('showbie-color.swift', [
  path.join(__dirname, '..', 'dist', 'showbie-color.swift'),
]);
ShowbieColors.build('showbie-color.js', [
  path.join(__dirname, '..', 'dist', 'showbie-color.js'),
]);

SocrativeColors.build('showbie-color.less', [
  path.join(__dirname, '..', 'dist', 'socrative-color.less'),
]);
SocrativeColors.build('showbie-color.scss', [
  path.join(__dirname, '..', 'dist', 'socrative-color.scss'),
]);
SocrativeColors.build('showbie-color.swift', [
  path.join(__dirname, '..', 'dist', 'socrative-color.swift'),
]);
SocrativeColors.build('showbie-color.js', [
  path.join(__dirname, '..', 'dist', 'socrative-color.js'),
]);
