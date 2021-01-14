import React, { ReactElement } from 'react';

import warning from 'warning';

import { ReactNodeNoStrings } from '../../types/ReactNodeNoStrings';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';

const validStackElements = ['div', 'ol', 'ul'] as const;
const spaceClassesMap = {
  '2': {
    space: 'pt-2',
    offset: 'before:-mt-2',
  },
};

type StackChild = 'div' | 'li';

export interface StackProps {
  children: ReactNodeNoStrings;
  /** The parent element to render. Children will also be wrapped appropriately. */
  tagName?: typeof validStackElements[number];
  /** The space between each item. Maps to a value on the Tailwind space scale. */
  space?: 'none' | '2';
  /** Render `Divider` components between children. */
  dividers?: boolean;
}

/**
 * The most common white space on screen is between elements stacked
 * vertically. Can also be used to automatically insert dividing lines
 * between children.
 */
export function Stack({
  children,
  tagName = 'div',
  space = 'none',
  dividers = false,
}: StackProps): ReactElement {
  warning(
    validStackElements.includes(tagName),
    `Invalid Stack tagName: '${tagName}'. Should be one of [${validStackElements
      .map((c) => `'${c}'`)
      .join(', ')}]`
  );

  let isList = tagName === 'ol' || tagName === 'ul';
  let stackItemElement: StackChild = isList ? 'li' : 'div';

  let spaceClass = '';
  let offsetClass = '';

  if (space !== 'none') {
    spaceClass = spaceClassesMap[space].space;
    offsetClass = `before:block before:empty-content ${spaceClassesMap[space].offset}`;
  }

  return (
    <Box tagName={tagName} className={offsetClass}>
      {React.Children.map(children, (child, index) => (
        <Box tagName={stackItemElement} className={spaceClass}>
          {dividers && index > 0 ? (
            <>
              <Divider />
              <Box className={spaceClass}>{child}</Box>
            </>
          ) : (
            child
          )}
        </Box>
      ))}
    </Box>
  );
}
