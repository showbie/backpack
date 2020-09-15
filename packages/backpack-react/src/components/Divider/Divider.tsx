import React, { ReactElement } from 'react';

import cx from 'clsx';

interface DividerProps {
  weight?: 'normal' | 'light';
}

export function Divider({ weight = 'normal' }: DividerProps): ReactElement {
  const dividerClass = cx('absolute w-full h-px', {
    'bg-divider': weight === 'normal',
    'bg-grey-200': weight === 'light',
  });

  return (
    <div className="relative">
      <div className={dividerClass} />
    </div>
  );
}
