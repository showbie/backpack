import React, { ReactElement } from 'react';

import cx from 'clsx';

interface DividerProps {
  weight?: 'normal' | 'light';
}

/**
 * A hairline divider to visually break up content. Mainly used in
 * conjunction with the `Stack` component, it can also be used
 * directly when needed.
 */
export function Divider({ weight = 'normal' }: DividerProps): ReactElement {
  let dividerClass = cx('absolute w-full h-px', {
    'bg-divider': weight === 'normal',
    'bg-grey-200': weight === 'light',
  });

  return (
    <div className="relative">
      <div className={dividerClass} />
    </div>
  );
}
