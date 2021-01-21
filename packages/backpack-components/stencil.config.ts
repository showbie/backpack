import { Config } from '@stencil/core';

export function createConfig(): Config {
  return {
    namespace: 'stencil-starter-project-name',
    outputTargets: [
      {
        type: 'dist',
        esmLoaderPath: '../loader',
      },
      {
        type: 'dist-custom-elements-bundle',
      },
      {
        type: 'docs-readme',
      },
      {
        type: 'www',
        serviceWorker: null, // disable service workers
      },
    ],
  };
}

export const config = createConfig();
