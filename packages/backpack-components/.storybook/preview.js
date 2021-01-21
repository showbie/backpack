// import './tailwind.css';
// import '../dist/styles.css';

import { addParameters } from '@storybook/html';


export const parameters = {
  grid: { cellSize: 12 },
  // This won't do anything until 6.1.x probably.
  backgrounds: {
    grid: { cellSize: 12 },
  },
};

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
});
