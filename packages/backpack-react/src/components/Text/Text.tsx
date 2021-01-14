import React, { ReactElement, ReactNode, useMemo } from 'react';

import cx from 'clsx';

import { Box, BoxProps } from '../Box/Box';

export interface TextProps extends Pick<BoxProps, 'className' | 'tagName'> {
  children?: ReactNode;
  /** Truncates the content with an ellipsis when overflowing a parent. */
  truncate?: boolean;
  preventSelection?: boolean;
}

/**
 * Provides a limited subset of typography-related properties. Also
 * handles other text utilities; like trimming leading whitespace,
 * truncating, and text selection.
 */
export function Text({
  children,
  className,
  tagName = 'span',
  truncate = false,
  preventSelection = false,
}: TextProps): ReactElement {
  let content = truncate ? (
    <Box tagName="span" className="block truncate">
      {children}
    </Box>
  ) : (
    children
  );

  let textClass = useMemo(
    () =>
      cx('block capsize', {
        'select-none': preventSelection,
        [className as string]: !!className,
      }),
    [className, preventSelection]
  );

  return (
    <Box tagName={tagName} className={textClass}>
      {content}
    </Box>
  );
}
