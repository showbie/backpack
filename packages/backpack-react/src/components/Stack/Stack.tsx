import React, { ReactElement } from 'react';

import warning from 'warning';

import { ReactNodeNoStrings } from '../../types/ReactNodeNoStrings';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';

const validStackElements = ['div', 'ol', 'ul'] as const;

export interface StackProps {
  tagName?: typeof validStackElements[number];
  children: ReactNodeNoStrings;
  dividers?: boolean;
}

export function Stack({
  tagName = 'div',
  children,
  dividers = false,
}: StackProps): ReactElement {
  warning(
    validStackElements.includes(tagName),
    `Invalid Stack tagName: '${tagName}'. Should be one of [${validStackElements
      .map((c) => `'${c}'`)
      .join(', ')}]`
  );

  const isList = tagName === 'ol' || tagName === 'ul';
  const stackItemElement = isList ? 'li' : 'div';

  return (
    <Box tagName={tagName}>
      {React.Children.map(children, (child, index) => (
        <Box tagName={stackItemElement}>
          {dividers && index > 0 ? (
            <div>
              <Divider />
            </div>
          ) : null}
          {child}
        </Box>
      ))}
    </Box>
  );
}
