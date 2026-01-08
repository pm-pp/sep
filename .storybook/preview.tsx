import type { Preview } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as msw from 'msw-storybook-addon';
import { ReactNode } from 'react';
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

const queryClient = new QueryClient();

const ApiProvider = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default preview;
