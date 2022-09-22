<template>
  <form @submit.prevent="signUp">
    <input aria-label="username" type="text" placeholder="username" v-model="form.username" />
    <input aria-label="email" type="email" placeholder="email" v-model="form.email" />
    <input aria-label="password" type="password" placeholder="password" v-model="form.password" />
    <button :disabled="buttonDisabled">Sign Up</button>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';

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
}

</script>

<style scoped>

</style>