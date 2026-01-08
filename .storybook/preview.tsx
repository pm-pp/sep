import type { Preview } from '@storybook/react-vite';
import * as msw from 'msw-storybook-addon';
import { ApiProvider } from '../src/lib/api';
import '../src/lib/tailwind/theme.css';

msw.initialize({
  onUnhandledRequest: 'bypass'
  // quiet: true,
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => {
      return (
        <ApiProvider>
          <Story />
        </ApiProvider>
      );
    }
  ]
};

export default preview;
