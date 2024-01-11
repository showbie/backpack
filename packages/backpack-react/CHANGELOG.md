# @showbie/backpack-react

## 2.1.0

### Minor Changes

- [#256](https://github.com/showbie/backpack/pull/256) [`7ece826`](https://github.com/showbie/backpack/commit/7ece826d98e314c9abb6f3680492a210c881ac7f) Thanks [@elidupuis](https://github.com/elidupuis)! - Upgrade to Node 16

## 2.0.0 — 2021-08-11

#### 💣 Breaking Change

- New versions are now published to the GitHub Package registry [#141](https://github.com/showbie/backpack/pull/141)

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
