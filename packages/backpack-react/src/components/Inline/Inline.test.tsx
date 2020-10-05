import * as React from 'react';

import { render } from '@testing-library/react';

import { Inline } from './Inline';

describe('<Inline />', () => {
  it('renders a div by default', () => {
    let { queryAllByRole, getByText } = render(
      <Inline>
        <div>Label</div>
      </Inline>
    );

    expect(getByText('Label')).toBeInTheDocument();
    expect(queryAllByRole('list').length).toBe(0);
    expect(queryAllByRole('listitem').length).toBe(0);
  });

  it('renders `li` elements within a list parent', () => {
    let { getByRole } = render(
      <Inline tagName="ul">
        <div>1</div>
        <div>2</div>
      </Inline>
    );
    let list = getByRole('list');

    expect(list.nodeName).toBe('UL');
    expect(
      Array.from(list.childNodes).map((childNode) => childNode.nodeName)
    ).toEqual(['LI', 'LI']);
  });
});
