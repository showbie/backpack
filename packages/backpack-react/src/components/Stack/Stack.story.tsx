import React from 'react';

import { Args, Story } from '@storybook/react/types-6-0';

import { Box } from '../Box/Box';
import { Stack } from './Stack';

export default {
  title: 'Layout/Stack',
  component: Stack,
};

export const Base: Story = (args: Args) => (
  <Stack {...args}>
    <Box className="h-8 bg-grey-50"></Box>
    <Box className="h-8 bg-grey-50"></Box>
    <Box className="h-8 bg-grey-50"></Box>
    <Box className="h-8 bg-grey-50"></Box>
  </Stack>
);

Base.args = {
  space: 'none',
  dividers: false,
};

export const Spaced: Story = () => (
  <Stack space="2">
    <Box className="h-8 bg-grey-50"></Box>
    <Box className="h-8 bg-grey-50"></Box>
    <Box className="h-8 bg-grey-50"></Box>
    <Box className="h-8 bg-grey-50"></Box>
  </Stack>
);

export const WithDividers: Story = () => (
  <Stack space="2" dividers>
    <Box className="h-8 bg-grey-50"></Box>
    <Box className="h-8 bg-grey-50"></Box>
    <Box className="h-8 bg-grey-50"></Box>
    <Box className="h-8 bg-grey-50"></Box>
  </Stack>
);
