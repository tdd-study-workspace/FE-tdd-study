import type { Meta, StoryFn } from '@storybook/vue3';
import SignInPage from './SignInPage.vue';
import { rest } from 'msw';
import { baseurl } from '@/service/api';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Page/SignInPage',
  component: SignInPage,
} as Meta<typeof SignInPage>;

const Template: StoryFn<typeof SignInPage> = args => ({
  components: { SignInPage },
  setup() {
    return { args };
  },
  template: '<sign-in-page v-bind="args" />',
});

export const WithEmptyEmail = Template.bind({});

WithEmptyEmail.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

	const userNameInput = await canvas.getByPlaceholderText(/Email/i);
  await userEvent.type(userNameInput, '  ', { delay: 10 });

	const signInButton = await canvas.getByRole('button', { name: /Sign in/i });
  await userEvent.click(signInButton);
};

export const withEmptyPassword = Template.bind({});
withEmptyPassword.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

	const userNameInput = await canvas.getByPlaceholderText(/Email/i);
  await userEvent.type(userNameInput, 'apple@example.com', { delay: 20 });

	const signInButton = await canvas.getByRole('button', { name: /Sign in/i });
  await userEvent.click(signInButton);
};

export const notExistAccount = Template.bind({});
notExistAccount.parameters = {
  msw: {
    handlers: [
      rest.post(baseurl('/users/login'), (req, res, ctx) => {
        return res(
          ctx.status(422),
          ctx.json({
            errors: {
              account: ['not exist'],
            },
          }),
        );
      }),
    ],
  },
};

notExistAccount.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

	const userNameInput = await canvas.getByPlaceholderText(/Email/i);
  await userEvent.type(userNameInput, 'apple@example.com', { delay: 20 });
	const passwordInput = await canvas.getByPlaceholderText(/Password/i);
  await userEvent.type(passwordInput, 'Qwer1234', { delay: 20 });

	const signInButton = await canvas.getByRole('button', { name: /Sign in/i });
  await userEvent.click(signInButton);
};