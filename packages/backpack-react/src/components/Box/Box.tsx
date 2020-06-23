// import {
//   AllHTMLAttributes,
//   ElementType,
//   createElement,
//   forwardRef,
// } from 'react';

// import { renderBackgroundProvider } from './BackgroundContext';

// // import { UseBoxStylesProps, useBoxStyles } from './useBoxStyles';

// export interface BoxProps
//   extends Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height'> {
//   tagName?: ElementType;
// }

// const NamedBox = forwardRef<HTMLElement, BoxProps>(
//   ({ tagName = 'div', className, ...restProps }, ref) => {
//     let element = createElement(tagName, {
//       className,
//       ...restProps,
//       ref,
//     });

//     return renderBackgroundProvider(background, element);
//   }
// );

// NamedBox.displayName = 'Box';

// export const Box = NamedBox;
