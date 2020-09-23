import {
  createElement,
  forwardRef,
  AllHTMLAttributes,
  ElementType,
} from 'react';

export interface BoxProps
  extends Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height'> {
  /** The HTML element to render. */
  tagName?: ElementType;
}

/**
 * The most low-level layout component. It acts as a container element
 * defining basic box-model properties. By default it renders as a
 * `div` element, but this can be changed with the `tagName` prop.
 */
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
