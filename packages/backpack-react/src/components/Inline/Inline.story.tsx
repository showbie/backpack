import React, { ReactElement } from 'react';

import { Inline } from './Inline';

export default {
  title: 'Layout/Inline',
  component: Inline,
};

export const base = (): ReactElement => (
  <Inline>
    <div className="w-8 h-8 bg-grey-50"></div>
    <div className="w-8 h-8 bg-grey-50"></div>
    <div className="w-8 h-8 bg-grey-50"></div>
    <div className="w-8 h-8 bg-grey-50"></div>
  </Inline>
);

export const noSpace = (): ReactElement => (
  <Inline space="none">
    <div className="w-8 h-8 bg-grey-50"></div>
    <div className="w-8 h-8 bg-grey-50"></div>
    <div className="w-8 h-8 bg-grey-50"></div>
    <div className="w-8 h-8 bg-grey-50"></div>
  </Inline>
);
