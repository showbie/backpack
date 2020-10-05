import * as React from 'react';

import { render } from '@testing-library/react';

import { Stack } from './Stack';

describe('<Stack />', () => {
  it('renders', () => {
    let { getByText } = render(
      <Stack>
        <div>Label</div>
      </Stack>
    );
    let element = getByText('Label');

    expect(element).toBeInTheDocument();
  });
});
