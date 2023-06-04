<template>
  <div>
    <NuxtLayout :layouts="layouts">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  computed: {
    layouts() {
      // Tüm sayfalarda kullanılacak düzenleri burada belirtebilirsiniz
      return {
        default: () => import('~/layouts/default.vue'),
        days: () => import('~/layouts/days.vue')
      }
    }
  }
};
</script>

<style scoped>
/* App.vue stil kuralları */
</style>
