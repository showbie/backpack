import React, { ReactNode, useContext, useMemo } from 'react';

import { UseTextProps, useText, useTruncate } from '../../hooks/typography';
import { Box, BoxProps } from '../Box/Box';
import TextContext from './TextContext';

export interface TextProps extends Pick<BoxProps, 'component'> {
  id?: string;
  children?: ReactNode;
  size?: UseTextProps['size'];
  tone?: UseTextProps['tone'];
  weight?: UseTextProps['weight'];
  baseline?: UseTextProps['baseline'];
  align?: BoxProps['textAlign'];
  truncate?: boolean;
  _LEGACY_SPACE_?: boolean;
}
