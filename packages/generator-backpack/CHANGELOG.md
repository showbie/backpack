# @showbie/generator-backpack

### 2.0.2 — 2021-10-01

#### 🐛 Fixed

- Correct a few remaining formatting errors [`5c455ed`](https://github.com/showbie/backpack/commit/5c455ed9c460065356bed789c7700e16fc131eb9)

### 2.0.1 — 2021-10-01

#### ♻️ Changed

- Fix issues with React component templates [#167](https://github.com/showbie/backpack/pull/167)
  - Don't include Sass by default, encourage use of Tailwind classes
  - Fix formatting of generated code
  - Include better types and configure default story for use of actions & controls
  - Add better `TestCase` function & remove deprecated assertion method

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
