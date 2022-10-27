<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-if="isEmailExist">That email is already taken</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              @click.prevent="onSubmit"
            >
              Sign up
            </button>
            <div class="tmp">
              {{ data }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCreateUser from '@/hooks/mutations/useCreateUser';
import type { AxiosError } from 'axios';
import { ref } from 'vue';
import type { CreateUserErrorResponseBody } from '@/service/models';

const { mutate, isError } = useCreateUser();

const isEmailExist = ref(false);

const createUserDto = {
  user: {
    username: 'test',
    email: 'asdjkasjkd',
    password: '123123',
  },
};

const onSubmit = async () => {
  mutate(createUserDto, {
    onError: error => {
      const res = (error as AxiosError).response;
      console.log('STATUS', res?.status);
      console.log('DATA', res?.data);
      if (res?.status === 422) {
        const resData = res?.data as CreateUserErrorResponseBody;
        if (
          resData.errors.email &&
          resData.errors.email[0] === 'has already been taken'
        ) {
          isEmailExist.value = true;
        }
        // TODO : username 에러 로직 추가
      }
    },
  });
};
</script>

<style scoped></style>
