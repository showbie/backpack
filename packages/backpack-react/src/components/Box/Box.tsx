import {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  ElementType,
} from 'react';

export interface BoxProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height'> {
  tagName?: ElementType;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ tagName = 'div', ...restProps }, ref) => {
    return createElement(tagName, {
      ...restProps,
      ref,
    });
  }
);

if (__DEV__) {
  Box.displayName = 'Box';
}
