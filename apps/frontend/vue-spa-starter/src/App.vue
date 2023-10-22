<script setup lang="ts">
const route = useRoute()
const layout = computed(() => {
  return route.meta.layout || 'DefaultLayout'
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped>

</style>
