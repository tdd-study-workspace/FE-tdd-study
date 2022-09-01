<template>
  <button>{{ title }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<style scoped lang="scss"></style>
