import React from 'react';

import { Story } from '@storybook/react/types-6-0';

import { Text } from './Text';

export default {
  title: 'Content/Text',
  component: Text,
};

export const Base: Story = () => <Text>Default text</Text>;
