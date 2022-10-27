<template>
  <form @submit.prevent="signIn">
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
    <button :disabled="buttonDisabled">Sign In</button>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';

const responseCode = 0;
const form = reactive({
  email: '',
  password: '',
});

const buttonDisabled = computed(() => {
  return !form.email || !form.password;
});

const signIn = () => {

};
</script>

<style scoped></style>
