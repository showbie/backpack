import '@testing-library/jest-dom/extend-expect';

import * as React from 'react';

import { render } from '@testing-library/react';

import { <%= pascalName %>, Props } from './<%= pascalName %>';

describe('<<%= pascalName %> />', () => {
  function setup(override = {}) {
    let props: Props = {
      ...override,
    };

    return render(<<%= pascalName %> {...props}>Label</<%= pascalName %>>);
  }

  it('renders', () => {
    let { getByText } = setup();
    let element = getByText('Label');

    expect(element).toBeInTheDOM();
  });
});
