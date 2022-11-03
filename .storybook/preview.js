import { app } from '@storybook/vue3';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { withSource } from './withSource';
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize({
  onUnhandledRequest: 'bypass',
});

app.use(VueQueryPlugin);
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withSource, mswDecorator]; // Docs 코드 에러가 공식적으로 Fix되면 사용하지 않는다.
