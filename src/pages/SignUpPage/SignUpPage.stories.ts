import type { Meta, StoryFn } from '@storybook/vue3';
import SignUpPage from './SignUpPage.vue';
import { rest } from 'msw';
import { baseurl } from '@/service/api';
import { userEvent, within, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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

WithDuplicatedEmail.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  const userNameInput = canvas.getByPlaceholderText(/Your Name/i);
  await userEvent.type(userNameInput, 'hyunja', { delay: 10 });
  const emailInput = canvas.getByPlaceholderText(/Email/i);
  await userEvent.type(emailInput, 'hyunja@ex-em.com', { delay: 10 });
  const passwordInput = canvas.getByPlaceholderText(/Password/i);
  await userEvent.type(passwordInput, 'adsADS@@12', { delay: 10 });
  const signUpButton = canvas.getByRole('button', { name: /Sign up/i });
  await userEvent.click(signUpButton);
  await waitFor(() =>
    expect(canvas.getByText('That email is already taken')).toBeTruthy(),
  );
};

export const WithInvalidEmail = Template.bind({});
WithInvalidEmail.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const userNameInput = await canvas.getByPlaceholderText(/Your Name/i);
  await userEvent.type(userNameInput, 'hyunja', { delay: 10 });
  const emailInput = await canvas.getByPlaceholderText(/Email/i);
  await userEvent.type(emailInput, 'dkkldfslkdfn', { delay: 10 });
  const passwordInput = await canvas.getByPlaceholderText(/Password/i);
  await userEvent.type(passwordInput, 'adsADS@@12', { delay: 10 });

  const signUpButton = await canvas.getByRole('button', { name: /Sign up/i });
  await userEvent.click(signUpButton);
};

export const WithInvalidPassword = Template.bind({});
WithInvalidPassword.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const userNameInput = await canvas.getByPlaceholderText(/Your Name/i);
  await userEvent.type(userNameInput, 'hyunja', { delay: 10 });
  const emailInput = await canvas.getByPlaceholderText(/Email/i);
  await userEvent.type(emailInput, 'hyunja@ex-em.com', { delay: 10 });
  const passwordInput = await canvas.getByPlaceholderText(/Password/i);
  await userEvent.type(passwordInput, 'invalid-password', { delay: 10 });

  const signUpButton = await canvas.getByRole('button', { name: /Sign up/i });
  await userEvent.click(signUpButton);
};

export const WithInvalidUserName = Template.bind({});
WithInvalidUserName.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const userNameInput = await canvas.getByPlaceholderText(/Your Name/i);
  await userEvent.type(userNameInput, '안녕ㅎㅎ ㅎ ', { delay: 10 });
  const emailInput = await canvas.getByPlaceholderText(/Email/i);
  await userEvent.type(emailInput, 'hyunja@ex-em.com', { delay: 10 });
  const passwordInput = await canvas.getByPlaceholderText(/Password/i);
  await userEvent.type(passwordInput, 'adsADS@@12', { delay: 10 });

  const signUpButton = await canvas.getByRole('button', { name: /Sign up/i });
  await userEvent.click(signUpButton);
};
