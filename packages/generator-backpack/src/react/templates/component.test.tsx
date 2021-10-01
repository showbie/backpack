import '@testing-library/jest-dom/extend-expect';

import * as React from 'react';

import { render } from '@testing-library/react';

import { <%= pascalName %> } from './<%= pascalName %>';

function renderComponent() {
  const mockHandler = jest.fn();

  const TestCase = () => {
    return <<%= pascalName %>>Text</<%= pascalName %>>;
  };
  const { getByText } = render(<TestCase />);

  return {
    getByText,
    mockHandler,
  };
}

describe('<<%= pascalName %> />', () => {
  it('renders', () => {
    const { getByText } = renderComponent();
    const element = getByText('Text');

    expect(element).toBeInTheDocument();
  });
});
