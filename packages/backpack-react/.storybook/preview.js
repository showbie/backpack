import '../src/styles.css';

import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, addParameters } from '@storybook/react';

addDecorator(withA11y);
addDecorator((story) => <div className="story-container">{story()}</div>);

addParameters({
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
});
