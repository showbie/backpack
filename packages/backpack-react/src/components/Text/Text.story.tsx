import React, { ReactElement } from 'react';

import { Text } from './Text';

export default {
  title: 'Content/Text',
  component: Text,
};

export const Base = (): ReactElement => <Text>Default text</Text>;
