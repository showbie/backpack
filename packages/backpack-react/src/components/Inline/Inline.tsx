import React, { ReactElement } from 'react';

import warning from 'warning';

import { ReactNodeNoStrings } from '../../types/ReactNodeNoStrings';
import { Box } from '../Box/Box';

const validInlineElements = ['div', 'ol', 'ul'] as const;
const spaceClassesMap = {
  '4': {
    item: 'mt-4 ml-4',
    row: '-ml-4',
    container: 'before:-mt-4',
  },
};

export interface InlineProps {
  children: ReactNodeNoStrings;
  /** The parent element to render. Children will also be wrapped appropriately. */
  tagName?: typeof validInlineElements[number];
  /** The space between each item. Maps to a value on the Tailwind space scale. */
  space?: 'none' | '4';
}

/**
 * Renders a set of components in a row with equal spacing around
 * them, wrapping onto multiple lines when necessary.
 */
export function Inline({
  children,
  tagName = 'div',
  space = '4',
}: InlineProps): ReactElement {
  warning(
    validInlineElements.includes(tagName),
    `Invalid Inline tagName: '${tagName}'. Should be one of [${validInlineElements
      .map((c) => `'${c}'`)
      .join(', ')}]`
  );

  const isList = tagName === 'ol' || tagName === 'ul';
  const inlineItemElement = isList ? 'li' : 'div';

  let itemClass = '';
  let rowClass = '';
  let containerClass = '';

  if (space !== 'none') {
    itemClass = spaceClassesMap[space].item;
    rowClass = spaceClassesMap[space].row;
    containerClass = `before:block before:empty-content ${spaceClassesMap[space].container}`;
  }

  return (
    <Box className={containerClass}>
      <Box tagName={tagName} className={`flex flex-wrap ${rowClass}`}>
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
