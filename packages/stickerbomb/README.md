# stickerbomb

> Generate a pack of icon components from SVG artwork.

```sh
npm install --global stickerbomb
```

Or install it to your project and run via npm scripts.

## Usage

```sh
# Runs with default options
stickerbomb [src] [dest]
```

- `src` is a glob of .svg files (default: `icons/*.svg`)
- `dest` is a directory path (default: `components/icons`)

By default, React components are output. Other component formats can
be output using the `--format` or `-f` flag, followed by the framework
name.

- Available formats: `ember`, `react`
