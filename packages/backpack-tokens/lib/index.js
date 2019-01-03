const path = require('path');

const ColorBuilder = require('./build-colors');
const COLORS = require('../src/color');
const pkg = require('../package.json');

const colorBuilder = new ColorBuilder(COLORS, pkg.version);

colorBuilder.build('showbie-color.scss', [
  path.join(__dirname, '..', 'dist', 'showbie-color.scss'),
]);
colorBuilder.build('showbie-color.m', [
  path.join(__dirname, '..', 'dist', 'showbie-color.m'),
]);
colorBuilder.build('showbie-color.swift', [
  path.join(__dirname, '..', 'dist', 'showbie-color.swift'),
]);
