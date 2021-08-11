# @showbie/backpack-react

## 1.0.1

### Patch Changes

- [`516149d`](https://github.com/showbie/backpack/commit/516149daf7c8e7bda4119578548b1697fc3087a4) [#142](https://github.com/showbie/backpack/pull/142) Thanks [@stormwarning](https://github.com/stormwarning)! - Further version of this package will be published to the GitHub Package registry

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
