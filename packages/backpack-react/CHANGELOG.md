# @showbie/backpack-react

## 2.0.0

### Major Changes

- [#141](https://github.com/showbie/backpack/pull/141) [`180bc2f`](https://github.com/showbie/backpack/commit/180bc2f2d201844e0b7f6550e4712d169e5f98a3) Thanks [@stormwarning](https://github.com/stormwarning)! - New versions are now published to the GitHub Package registry
  You will need to add the following to `.npmrc` in your project root:

  ```
  @showbie:registry=https://npm.pkg.github.com/showbie
  ```

## 1.0.1 — 2021-08-10

#### 🚚 Deprecated

- Further versions of this package will be published to the GitHub Package registry [#142](https://github.com/showbie/backpack/pull/142)

## 1.0.0 — 2020-10-28

#### 🎉 Initial release

- Create shared React component library [#26](https://github.com/showbie/backpack/pull/26)

  Starts with just a few basic layout components:

  1. `Box` — low-level container component, can render as any
     element via `tagName` prop
  2. `Stack` — stack elements vertically, with optional spacing
     and dividers
  3. `Divider` — used by `Stack` components, can also be used
     directly as needed
  4. `Inline` — maintain space between elements in a row,
     wrapping if necessary
  5. `Text` — apply common typography style patterns, as well
     as other text utilities such as truncating
