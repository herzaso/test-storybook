import React from 'react';
import type { Preview } from "@storybook/react";
import { MyBlock } from '../src/stories/MyBlock';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <MyBlock />
        </>
      ),
    }
  },
};

export default preview;
