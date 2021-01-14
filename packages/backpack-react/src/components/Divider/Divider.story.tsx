import React from 'react';

import { Args, Story } from '@storybook/react/types-6-0';

import { Divider } from './Divider';

export default {
  title: 'Layout/Divider',
  component: Divider,
};

export const Default: Story = (args: Args) => <Divider {...args} />;

export const Light: Story = () => <Divider weight="light" />;
