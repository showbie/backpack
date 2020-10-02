import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useMemo,
} from 'react';

import warning from 'warning';

import { Box, BoxProps } from '../Box/Box';
import { useText, UseTextProps } from './hooks';

export interface TextProps extends Pick<BoxProps, 'tagName'> {
  children?: ReactNode;
  id?: string;
  family?: UseTextProps['family'];
  size?: UseTextProps['size'];
  weight?: UseTextProps['weight'];
  leading?: UseTextProps['leading'];
  color?: UseTextProps['color'];
  align?: UseTextProps['align'];
  /** Truncates the content with an ellipsis when overflowing a parent. */
  truncate?: boolean;
}

export const TextContext = createContext<UseTextProps | false>(false);

/**
 * Provides a limited subset of typography-related properties. Also
 * handles other text utilities; like trimming leading whitespace,
 * truncating, and text selection.
 */
export function Text({
  children,
  id,
  tagName = 'span',
  family,
  size,
  weight,
  leading,
  color,
  align,
  truncate = false,
}: TextProps): ReactElement {
  warning(
    !useContext(TextContext),
    'Text components should not be nested within other Text components'
  );

  const textStyles = useText({ family, size, weight, leading, color, align });

  // Prevent re-renders when context values haven't changed
  const textContextValue = useMemo(
    () => ({
      family,
      size,
      weight,
      leading,
      color,
      align,
    }),
    [family, size, weight, leading, color, align]
  );

  const content = truncate ? (
    <Box tagName="span" className="block truncate">
      {children}
    </Box>
  ) : (
    children
  );

  return (
    <TextContext.Provider value={textContextValue}>
      <Box id={id} tagName={tagName} className={`block ${textStyles}`}>
        {content}
      </Box>
    </TextContext.Provider>
  );
}