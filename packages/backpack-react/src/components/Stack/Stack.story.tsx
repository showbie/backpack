import React, { ReactElement } from 'react';

import { Box } from '../Box/Box';

import { Stack } from './Stack';

export default {
  title: 'Layout/Stack',
  component: Stack,
};

export const base = (): ReactElement => (
  <Stack>
    <Box>Box</Box>
    <Box>Box</Box>
    <Box>Box</Box>
  </Stack>
);

export const withDividers = (): ReactElement => (
  <Stack dividers>
    <Box>Box</Box>
    <Box>Box</Box>
    <Box>Box</Box>
  </Stack>
);
