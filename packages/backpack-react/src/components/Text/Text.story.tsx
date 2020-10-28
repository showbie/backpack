import React from 'react';

import { Args, Story } from '@storybook/react/types-6-0';

import { Box } from '../Box/Box';
import { Text } from './Text';

export default {
  title: 'Content/Text',
  component: Text,
};

export const Base: Story = (args: Args) => (
  <Box className="font-sans bg-indigo-100">
    <Text className="text-base leading-8" {...args}>
      Octagon 侍 hardcore ICE psychoactive 東京 biz Night City. <br />
    </Text>
  </Box>
);

export const Truncated: Story = () => (
  <Box className="max-w-16">
    <Text truncate>A long string of text</Text>
  </Box>
);
