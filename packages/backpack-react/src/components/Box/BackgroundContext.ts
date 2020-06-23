// import { ReactElement, createContext, useContext } from 'react';

// // import { BoxProps } from './Box';

// export type BackgroundVariant =
//   // | BoxProps['background']
//   'UNKNOWN_DARK' | 'UNKNOWN_LIGHT';

// const backgroundContext = createContext<BackgroundVariant | null>(null);

// export const BackgroundProvider = backgroundContext.Provider;

// export const renderBackgroundProvider = (
//   background: BackgroundVariant,
//   element: ReactElement | null
// ) => element;

// export const useBackground = () => useContext(backgroundContext);

// export const useBackgroundLightness = (
//   backgroundOverride?: ReturnType<typeof useBackground>
// ) => {
//   const backgroundFromContext = useBackground();
//   const background = backgroundOverride || backgroundFromContext;
//   // const { backgroundLightness } = useBraidTheme();
//   // const defaultLightness = backgroundLightness.body;

//   if (background === 'UNKNOWN_DARK') {
//     return 'dark';
//   }

//   if (background === 'UNKNOWN_LIGHT') {
//     return 'light';
//   }

//   return 'light';
//   // return background
//   //   ? backgroundLightness[background] || defaultLightness
//   //   : defaultLightness;
// };
