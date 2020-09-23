import '@testing-library/jest-dom/extend-expect';

import * as React from 'react';

import { render } from '@testing-library/react';

import { Inline } from './Inline';

describe('<Inline />', () => {
  it('renders', () => {
    let { getByText } = render(
      <Inline>
        <div>Label</div>
      </Inline>
    );
    let element = getByText('Label');

    expect(element).toBeInTheDocument();
  });
});
