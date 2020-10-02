import React from 'react';

import { Args, Story } from '@storybook/react/types-6-0';

import { Box } from '../Box/Box';
import { Inline } from './Inline';

export default {
  title: 'Layout/Inline',
  component: Inline,
};

export const Default: Story = (args: Args) => (
  <Inline {...args}>
    <Box className="w-8 h-8 bg-grey-50"></Box>
    <Box className="w-8 h-8 bg-grey-50"></Box>
    <Box className="w-8 h-8 bg-grey-50"></Box>
    <Box className="w-8 h-8 bg-grey-50"></Box>
  </Inline>
);

export const NoSpace: Story = () => (
  <Inline space="none">
    <Box className="w-8 h-8 bg-grey-50"></Box>
    <Box className="w-8 h-8 bg-grey-50"></Box>
    <Box className="w-8 h-8 bg-grey-50"></Box>
    <Box className="w-8 h-8 bg-grey-50"></Box>
  </Inline>
);
