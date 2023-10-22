<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<script lang="ts">
// Here you can add regular typescript (non-vue related) functions that you wanna use in other files for this component for testing for example or so

</script>

<template>
  <button class="personal-button">
    {{ props.text }}
  </button>
</template>

<style scoped>
.personal-button {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}
</style>