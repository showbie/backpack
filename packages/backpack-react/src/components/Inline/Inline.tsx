import React, { ReactElement } from 'react';

import cx from 'clsx';
import warning from 'warning';

import { ReactNodeNoStrings } from '../../types/ReactNodeNoStrings';
import { Box } from '../Box/Box';

const validInlineElements = ['div', 'ol', 'ul'] as const;

export interface InlineProps {
  children: ReactNodeNoStrings;
  tagName?: typeof validInlineElements[number];
  space?: 'default' | 'none';
}

/**
 * Renders a set of components in a row with equal spacing around
 * them, wrapping onto multiple lines when necessary.
 */
export function Inline({
  children,
  tagName = 'div',
  space = 'default',
}: InlineProps): ReactElement {
  warning(
    validInlineElements.includes(tagName),
    `Invalid Inline tagName: '${tagName}'. Should be one of [${validInlineElements
      .map((c) => `'${c}'`)
      .join(', ')}]`
  );

  const isList = tagName === 'ol' || tagName === 'ul';
  const inlineItemElement = isList ? 'li' : 'div';

  const containerClass = cx({
    'before:block before:empty-content': space !== 'none',
    'before:-mt-4': space === 'default',
  });
  const rowClass = cx('flex flex-wrap', {
    '-ml-4': space === 'default',
  });
  const itemClass = cx('min-w-none', {
    'mt-4 ml-4': space === 'default',
  });

  return (
    <Box className={containerClass}>
      <Box tagName={tagName} className={rowClass}>
        {React.Children.map(children, (child) =>
          child !== null && child !== undefined ? (
            <Box tagName={inlineItemElement} className={itemClass}>
              {child}
            </Box>
          ) : null
        )}
      </Box>
    </Box>
  );
}
