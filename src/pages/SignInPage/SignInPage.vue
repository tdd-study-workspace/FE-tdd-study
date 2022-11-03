<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <a href="">Don't have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-if="emptyEmail">Please enter your email.</li>
            <li v-if="emptyPassword">Please enter your password.</li>
            <li v-if="loginFailed">Account does not exist.</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                v-model="form.email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="form.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              @click.prevent="onSubmit"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLogin from '@/hooks/mutations/useLogin';
import type { AxiosError } from 'axios';
import { ref } from 'vue';
import type { CreateUserErrorResponseBody } from '@/service/models';

const { mutate, isError } = useLogin();

const emptyEmail = ref(false);
const emptyPassword = ref(false);
const loginFailed = ref(false);

const form = ref({
  email: '',
  password: '',
});

const createUserDto = {
  user: {
    email: 'asdjkasjkd',
    password: '123123',
  },
};

const formValidator = () => {
  emptyEmail.value = false;
  emptyPassword.value = false;

  console.log('->', form.value);

  if (!form.value.email.trim()) {
    emptyEmail.value = true;
    return ;
  }

  if (!form.value.password.trim()) {
    emptyPassword.value = true;
    return ;
  }
};

const onSubmit = async () => {
  loginFailed.value = false;
  formValidator();
  if (
    emptyEmail.value ||
    emptyPassword.value
  ) {
    return;
  }
  mutate(createUserDto, {
    onError: error => {
      const res = (error as AxiosError).response;
      console.log('STATUS', res?.status);
      console.log('DATA', res?.data);
      if (res?.status === 422) {
        loginFailed.value = true;
        // const resData = res?.data as CreateUserErrorResponseBody;
      }
    },
  });
};
</script>

<style scoped></style>
