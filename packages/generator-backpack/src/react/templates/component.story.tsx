import * as React from 'react';

import { Meta, Story } from '@storybook/react';

import { <%= pascalName %>, Props } from './<%= pascalName %>';

export default {
  title: 'Teacher/<%= pascalName %>',
  component: <%= pascalName %>,
  // parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

export const Default: Story<Props> = (args) => (
    <<%= pascalName %> {...args}>Text</<%= pascalName %>>
);
