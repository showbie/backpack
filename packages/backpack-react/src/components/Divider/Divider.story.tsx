import React, { ReactElement } from 'react';

import { Divider } from './Divider';

export default {
  title: 'Layout/Divider',
  component: Divider,
};

export const base = (): ReactElement => <Divider />;

export const light = (): ReactElement => <Divider weight="light" />;
