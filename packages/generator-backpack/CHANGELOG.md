# @showbie/generator-backpack

## 2.0.1

### Patch Changes

- [#167](https://github.com/showbie/backpack/pull/167) [`9ddbce1`](https://github.com/showbie/backpack/commit/9ddbce112967d5d2ee2c1bc1d1ebed0e265110c6) Thanks [@stormwarning](https://github.com/stormwarning)! - Fix issues with React component templates

  - Don't include Sass by default, encourage use of Tailwind classes
  - Fix formatting of generated code
  - Include better types and configure story for use of actions & controls
  - Add better TestCase function & remove deprecated assertion method

## 2.0.0 — 2021-08-11

#### 💣 Breaking Change

- New versions are now published to the GitHub Package registry [#141](https://github.com/showbie/backpack/pull/141)

  You will need to add the following to `.npmrc` in your project root:

  ```
  @showbie:registry=https://npm.pkg.github.com/showbie
  ```

## 1.1.1 — 2021-08-10

#### 🚚 Deprecated

- Further versions of this package will be published to the GitHub Package registry [#142](https://github.com/showbie/backpack/pull/142)

## 1.1.0 — 2020-07-29

#### 🎁 Added

- e487cc7: Add template for React function components, used by default
