import type { Meta, StoryFn } from '@storybook/vue3';
import SignUpPage from './SignUpPage.vue';
import { rest } from 'msw';
import { baseurl } from '@/service/api';
import { screen, userEvent } from '@storybook/testing-library';

export default {
  title: 'Page/SignUpPage',
  component: SignUpPage,
} as Meta<typeof SignUpPage>;

const Template: StoryFn<typeof SignUpPage> = args => ({
  components: { SignUpPage },
  setup() {
    return { args };
  },
  template: '<sign-up-page v-bind="args" />',
});

export const WithDuplicatedEmail = Template.bind({});
WithDuplicatedEmail.parameters = {
  msw: {
    handlers: [
      rest.post(baseurl('/users'), (req, res, ctx) => {
        return res(
          ctx.status(422),
          ctx.json({
            errors: {
              email: ['has already been taken'],
            },
          }),
        );
      }),
    ],
  },
};

WithDuplicatedEmail.play = async () => {
  const Submit = screen.getByText('Sign up');
  await userEvent.click(Submit);
};
