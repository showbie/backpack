# Showbie Backpack

This project manages and publishes a few [npm packages](https://github.com/orgs/showbie/packages?repo_name=backpack) to the Github Package Registry under the `@showbie` scope.

## Development

Install the proper Node version and install dependencies:

```sh
# https://github.com/nvm-sh/nvm
nvm use
yarn install
```

<details>
  <summary>Dont' have `yarn` installed?</summary>
  
  If yarn doesn't work, try enabling [corepack](https://nodejs.org/api/corepack.html):

```sh
corepack enable
```

</details>

### Build

To build the entire project:

```sh
yarn build
```

Each package should have its own README so be sure to check those out.

### Changelog

This project uses [changesets](https://github.com/changesets/changesets) to manage the changelog. This is integrated into Github actions and when you create a PR it will give you instructions on how to create a changeset, which is required for each PR.

```sh
# tl;dr
yarn changeset
```
