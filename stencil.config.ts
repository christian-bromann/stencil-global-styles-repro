import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'globalstykes',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: 'src/global.css',
  testing: {
    browserHeadless: "new",
  },
};
