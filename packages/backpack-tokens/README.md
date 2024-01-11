# `@showbie/backpack-tokens`

![GitHub package.json version](https://img.shields.io/github/package-json/v/showbie/backpack-tokens)

A design token is an abstraction of a visual property such as colour, font, width, animation, etc. These raw values are language-agnostic and once transformed and formatted can be used on any platform.

## Development

See the `src` directory to update the colour tokens for Showbie and Socrative.
Any changes here will be built by the logic and templates in the `lib` directory and then released
in the `@showbie/backpack-tokens` npm package. The releases are triggered in Github Actions
via changeset workflows.

### Docs Site (vuepress)

There is also Vuepress documentation site in the `docs` directory. To run the docs site locally:

```sh
cd packages/backpack-tokens
yarn docs:dev
```
