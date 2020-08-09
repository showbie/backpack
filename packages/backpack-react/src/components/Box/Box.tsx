import {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  ElementType,
} from 'react';

export interface BoxProps
  extends Omit<
    AllHTMLAttributes<HTMLElement>,
    'width' | 'height' | 'className'
  > {
  component?: ElementType;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component = 'div', ...restProps }, ref) => {
    return createElement(component, {
      ...restProps,
      ref,
    });
  }
);

if (__DEV__) {
  Box.displayName = 'Box';
}
