import * as React from 'react';

import { Inline } from './Inline';

export default {
  title: 'Teacher/Inline',
  component: Inline,
};

export const base = () => (
  <>
    <Inline>Default</Inline>
    <div className="mt-4">
      <Inline>Hovered</Inline>
    </div>
    <div className="mt-4">
      <Inline>Disabled</Inline>
    </div>
  </>
);
