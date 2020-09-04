### 2.5.1 — 2020-06-23

## 2.6.0

### Minor Changes

- 27c7244: Add new `color-docs` token export \
  Exports an object with all app palettes and pre-generated values for
  use the docs site.

#### 🔒 Security

- [#18](https://github.com/showbie/backpack/pull/18) Bump acorn from 6.3.0 to 6.4.1 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
- [#28](https://github.com/showbie/backpack/pull/28) Bump websocket-extensions from 0.1.3 to 0.1.4 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))

### 2.5.0 — 2020-03-24

#### 🎁 Added

- [#21](https://github.com/showbie/backpack/pull/21) Add `700`-level colours to Socrative palette ([@stormwarning](https://github.com/stormwarning))

### 2.4.0 — 2020-03-23

#### 🎁 Added

- [#19](https://github.com/showbie/backpack/pull/19) Add `100`-level colours & `grey-800` to Socrative ([@stormwarning](https://github.com/stormwarning)) \
  New light shades of orange and indigo for background hovers.

### 2.3.0 — 2020-02-19

#### ♻️ Changed

- [#10](https://github.com/showbie/backpack/pull/10) Rewrite tokens builder in TypeScript ([@stormwarning](https://github.com/stormwarning))

#### 🎁 Added

- [#12](https://github.com/showbie/backpack/pull/12) Add new blues to Socrative palette ([@stormwarning](https://github.com/stormwarning))

#### 🔒 Security

- [#4](https://github.com/showbie/backpack/pull/4) Bump serialize-javascript from 1.9.1 to 2.1.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))

### 2.2.0 — 2020-02-12

#### 🎁 Added

- [#3](https://github.com/showbie/backpack/pull/3) Add `50`- and `700`-level red values ([@stormwarning](https://github.com/stormwarning))

### 2.1.0 — 2020-01-22

#### 🎁 Added

- Add `200`-level red to Showbie & Socrative palettes

## 2.0.0 — 2020-01-17

#### 💣 Breaking Change

- Rename Socrative `orange` to `amber` \
  Makes room in the spectrum for a more "strict" `orange` hue.

#### 🎁 Added

- Add indigo colours to Socrative palette
- Add orange colours to Socrative palette

### 1.4.0 — 2020-01-16

#### 🎁 Added

- Add all Showbie reds to Socrative palette \
  Red palette is imported directly; any change to Showbie reds will update the Socrative palette.

### 1.3.0 — 2020-01-14

#### 🎁 Added

- Add `100`-level grey to Showbie palette

### 1.2.0 — 2020-01-10

#### 🎁 Added

- Add `900`-level slate colour to Showbie palette \
  Includes changes to templates & docs to allow for colours with alpha values.

### 1.1.0 — 2020-01-09

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

### 0.6.0 — 2019-12-02

#### 🎁 Added

- Add new red & green colours to Showbie palette \
  As per: [sketch.cloud/s/15bvw/a/a1xL85](https://sketch.cloud/s/15bvw/a/a1xL85) Also adds docs for retired red values.

### 0.5.0 — 2019-11-19

#### 🎁 Added

- Add blessed `50`-level grey to Showbie palette

### 0.4.0 — 2019-09-23

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

### 0.1.0 — 2019-05-29

🎉 Initial release!
