# stickerbomb

## 0.4.0

### Minor Changes

- [#256](https://github.com/showbie/backpack/pull/256) [`7ece826`](https://github.com/showbie/backpack/commit/7ece826d98e314c9abb6f3680492a210c881ac7f) Thanks [@elidupuis](https://github.com/elidupuis)! - Upgrade to Node 16

## 0.3.0 — 2021-03-01

#### 🎁 Added

- [#106](https://github.com/showbie/backpack/pull/106) Allow config from external file
  Uses `cosmiconfig` to search for common config filenames. Only used
  for providing a custom SVG template for React icons at the moment, but
  more configuration will be possible in future.

### 0.2.3 — 2021-02-02

#### 🐛 Fixed

- [#102](https://github.com/showbie/backpack/pull/102) Fix issues with export index not being written properly

  Now writes correctly on first run of a new project, and updates when
  icons are added or removed from source directory.

### 0.2.2 — 2021-01-25

#### 🐛 Fixed

- [`ba23521`](https://github.com/showbie/backpack/commit/ba23521ea9501281c6487b4fa1e985cc26b94e32) Fix build output when publishing

### 0.2.1 — 2021-01-25

#### 🐛 Fixed

- [`666655d`](https://github.com/showbie/backpack/commit/666655d0a2a5597faba3b6b35be82a2533345b08) Ensure all files in `dist` dir are distributed

## 0.2.0 — 2021-01-22

#### 🎁 Added

- [#95](https://github.com/showbie/backpack/pull/95) Allow subdirs in icon source directory

  Components are now generated into the same directory structure as
  the original source SVGs. An export index will be added for each
  sub-directory (in the case of React components).

## 0.1.1 — 2020-12-18

#### 🎉 Initial release!
