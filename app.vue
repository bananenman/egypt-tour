<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup lang="ts">
useSeoMeta({
  title: 'Egypt Tour',
  description: 'EgyTour - A touring site for Egypt',
  ogTitle: 'Egypt Tour',
  ogDescription: 'Tour of sights in Egypt',
  ogImage: 'favicon.ico',
  ogUrl: 'egypt-tour.vercel.app',
})

useHead({
  titleTemplate: '%s - EgyTour',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { name: 'description', content: 'EgyTour - A touring site for Egypt' }
  ],
})
</script>