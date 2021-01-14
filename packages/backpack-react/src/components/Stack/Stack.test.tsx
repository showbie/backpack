import * as React from 'react';

import { render } from '@testing-library/react';

import { Stack } from './Stack';

describe('<Stack />', () => {
  it('renders a div by default', () => {
    let { queryAllByRole, getByText } = render(
      <Stack>
        <div>Label</div>
      </Stack>
    );

    expect(getByText('Label')).toBeInTheDocument();
    expect(queryAllByRole('list').length).toBe(0);
    expect(queryAllByRole('listitem').length).toBe(0);
  });

  it('renders `li` elements within a list parent', () => {
    let { getByRole } = render(
      <Stack tagName="ul">
        <div>1</div>
        <div>2</div>
      </Stack>
    );
    let list = getByRole('list');

    expect(list.nodeName).toBe('UL');
    expect(
      Array.from(list.childNodes).map((childNode) => childNode.nodeName)
    ).toEqual(['LI', 'LI']);
  });
});
