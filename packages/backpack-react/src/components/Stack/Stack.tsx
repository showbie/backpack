import React, { ReactElement } from 'react';

import warning from 'warning';

import { Box, Divider } from '..';

export type ReactNodeNoStrings =
  | React.ReactElement
  | Array<ReactNodeNoStrings>
  | boolean
  | null
  | undefined;

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

  return (
    <Box tagName={tagName}>
      {React.Children.map(children, (child, index) => (
        <div>
          {dividers && index > 0 ? (
            <div>
              <Divider />
            </div>
          ) : null}
          {child}
        </div>
      ))}
    </Box>
  );
}
