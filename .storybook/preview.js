import { withSource } from './withSource';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withSource]; // Docs 코드 에러가 공식적으로 Fix되면 사용하지 않는다.
