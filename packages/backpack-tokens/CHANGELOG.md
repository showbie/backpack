# Change Log

## 4.1.1

### Patch Changes

- [#260](https://github.com/showbie/backpack/pull/260) [`39b7c24`](https://github.com/showbie/backpack/commit/39b7c249f5af8a6c81aaeff16caa835d4a4bf6c4) Thanks [@elidupuis](https://github.com/elidupuis)! - Fix sbe-grey-1000 value

## 4.1.0

### Minor Changes

- [#258](https://github.com/showbie/backpack/pull/258) [`6058c1f`](https://github.com/showbie/backpack/commit/6058c1fa01f1e83b826c3c23eff9d0086e5e4e40) Thanks [@elidupuis](https://github.com/elidupuis)! - Revert Node upgrade

## 4.0.0

### Major Changes

- [#255](https://github.com/showbie/backpack/pull/255) [`7dbe4aa`](https://github.com/showbie/backpack/commit/7dbe4aa0eb6f1c5a84921b53affa315034630af7) Thanks [@elidupuis](https://github.com/elidupuis)! - Update Showbie colour tokens to latest accessible palette

### Minor Changes

- [#256](https://github.com/showbie/backpack/pull/256) [`7ece826`](https://github.com/showbie/backpack/commit/7ece826d98e314c9abb6f3680492a210c881ac7f) Thanks [@elidupuis](https://github.com/elidupuis)! - Upgrade to Node 16

## 3.2.0 — 2022-01-26

#### 🎁 Added

- [#194](https://github.com/showbie/backpack/pull/194) Add CSS custom property template

  Thanks [@elidupuis](https://github.com/elidupuis)!

### 3.1.1 — 2022-01-20

#### ♻️ Changed

- [#188](https://github.com/showbie/backpack/pull/188) Update value for `blue-700` in the Showbie palette

## 3.1.0 — 2022-01-12

#### 🎁 Added

- [#178](https://github.com/showbie/backpack/pull/178) Add `grey-300` to Showbie palette

## 3.0.0 — 2021-08-11

#### 💣 Breaking Change

- New versions are now published to the GitHub Package registry [#141](https://github.com/showbie/backpack/pull/141)

  You will need to add the following to `.npmrc` in your project root:

  ```
  @showbie:registry=https://npm.pkg.github.com/showbie
  ```

## 2.8.1 — 2021-08-10

#### 🚚 Deprecated

- Further versions of this package will be published to the GitHub Package registry [#142](https://github.com/showbie/backpack/pull/142)

## 2.8.0 — 2021-01-05

#### 🎁 Added

- [#93](https://github.com/showbie/backpack/pull/93) Add new colours to Socrative palette \
  Adds `300`-level green, `300`, `400` and `900`-level amber shades, and
  `400`-level red.

## 2.7.0 — 2020-09-24

#### 🎁 Added

- [#64](https://github.com/showbie/backpack/pull/64) Add new colours to Socrative palette \
  Adds `300` and `900`-level shades of red, `800`-level orange, and
  `700`, `800`, and `900`-level shades of green. This also decouples
  the red values from the Showbie palette, making it standalone.

## 2.6.0 — 2020-09-04

#### 🎁 Added

- [`27c7244`](https://github.com/showbie/backpack/commit/27c7244772d8d5e6c9ff7bbdf39ca2298292d805) Add new `color-docs` token export \
  Exports an object with all app palettes and pre-generated values for
  use on the docs site.

### 2.5.1 — 2020-06-23

#### 🔒 Security

- [#18](https://github.com/showbie/backpack/pull/18) Bump acorn from 6.3.0 to 6.4.1
- [#28](https://github.com/showbie/backpack/pull/28) Bump websocket-extensions from 0.1.3 to 0.1.4

## 2.5.0 — 2020-03-24

#### 🎁 Added

- [#21](https://github.com/showbie/backpack/pull/21) Add `700`-level colours to Socrative palette

## 2.4.0 — 2020-03-23

#### 🎁 Added

- [#19](https://github.com/showbie/backpack/pull/19) Add `100`-level colours & `grey-800` to Socrative \
  New light shades of orange and indigo for background hovers.

## 2.3.0 — 2020-02-19

#### ♻️ Changed

- [#10](https://github.com/showbie/backpack/pull/10) Rewrite tokens builder in TypeScript

#### 🎁 Added

- [#12](https://github.com/showbie/backpack/pull/12) Add new blues to Socrative palette

#### 🔒 Security

- [#4](https://github.com/showbie/backpack/pull/4) Bump serialize-javascript from 1.9.1 to 2.1.2

## 2.2.0 — 2020-02-12

#### 🎁 Added

- [#3](https://github.com/showbie/backpack/pull/3) Add `50`- and `700`-level red values

## 2.1.0 — 2020-01-22

#### 🎁 Added

- Add `200`-level red to Showbie & Socrative palettes

## 2.0.0 — 2020-01-17

#### 💣 Breaking Change

- Rename Socrative `orange` to `amber` \
  Makes room in the spectrum for a more "strict" `orange` hue.

#### 🎁 Added

- Add indigo colours to Socrative palette
- Add orange colours to Socrative palette

## 1.4.0 — 2020-01-16

#### 🎁 Added

- Add all Showbie reds to Socrative palette \
  Red palette is imported directly; any change to Showbie reds will update the Socrative palette.

## 1.3.0 — 2020-01-14

#### 🎁 Added

- Add `100`-level grey to Showbie palette

## 1.2.0 — 2020-01-10

#### 🎁 Added

- Add `900`-level slate colour to Showbie palette \
  Includes changes to templates & docs to allow for colours with alpha values.

## 1.1.0 — 2020-01-09

#### 🎁 Added

- Add `200`-level grey to Showbie palette \
  Includes revisions to legacy grey docs.

## 1.0.0 — 2020-01-06

#### 💣 Breaking Change

- Update all grey colours in Socrative palette \
   Usage of `grey-300` and `grey-400` should be changed to `grey-500`
  and `grey-600`, respectively.

### 0.6.1 — 2019-12-04

#### 🐛 Fixed

- Unify green values across Showbie & Socrative palettes

## 0.6.0 — 2019-12-02

#### 🎁 Added

- Add new red & green colours to Showbie palette \
  As per: [sketch.cloud/s/15bvw/a/a1xL85](https://sketch.cloud/s/15bvw/a/a1xL85) Also adds docs for retired red values.

## 0.5.0 — 2019-11-19

#### 🎁 Added

- Add blessed `50`-level grey to Showbie palette

## 0.4.0 — 2019-09-23

#### 🎁 Added

- Add `700`-level cyan to Socrative palette

## 0.3.0 — 2019-09-20

#### 💣 Breaking Change

- Update all Socrative `100`-level colours

### 0.2.4 — 2019-09-16

#### 🐛 Fixed

- Remove redundant `public` modifier from Swift template

### 0.2.3 — 2019-09-13

#### 🗑️ Removed

- Remove non-blessed colours \
  This will allow for unambiguous usage of the current colour values.

#### 🐛 Fixed

- Add access modifiers to Swift template

## 0.2.0 — 2019-08-23

#### 💣 Breaking Change

- Removed some "cursed" colours from the current Socrative palette

### 0.1.1 — 2019-05-31

#### ♻️ Changed

- Modified Swift output files to include hex values in comments

## 0.1.0 — 2019-05-29

### 🎉 Initial release!
