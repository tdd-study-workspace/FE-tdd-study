<template>
  <form @submit.prevent="signUp">
    <span v-if="responseCode === 422">error</span>
    <input
      v-model="form.username"
      aria-label="username"
      type="text"
      placeholder="username"
    />
    <input
      v-model="form.email"
      aria-label="email"
      type="email"
      placeholder="email"
    />
    <input
      v-model="form.password"
      aria-label="password"
      type="password"
      placeholder="password"
    />
    <button :disabled="buttonDisabled">Sign Up</button>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';

const responseCode = 0;
const form = reactive({
  username: '',
  email: '',
  password: '',
});

const buttonDisabled = computed(() => {
  return !form.username || !form.email || !form.password;
});

const signUp = () => {
  // TODO: SignUp 로직
};
</script>

<style scoped></style>
