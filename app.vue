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
  description: 'A Tour of Egypt',
  ogTitle: 'Egypt Tour',
  ogDescription: 'Tour of the country Egypt',
  ogImage: 'favicon.ico',
  ogUrl: 'egypt-tour.vercel.app',
})

useHead({
  titleTemplate: '%s - EgyTour',
  htmlAttrs: {
    lang: 'en',
  }
})
</script>