import { addons } from '@storybook/addons';
import { addParameters } from '@storybook/react';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: '🎒 Backpack',
  }),
});
