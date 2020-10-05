import React from 'react';

import { Args, Story } from '@storybook/react/types-6-0';

import { Text } from './Text';
import { Box } from '../Box/Box';

export default {
  title: 'Content/Text',
  component: Text,
};

export const Base: Story = (args: Args) => <Text {...args}>Default text</Text>;

export const Truncated: Story = () => (
  <Box className="max-w-16">
    <Text truncate>A long string of text</Text>
  </Box>
);
