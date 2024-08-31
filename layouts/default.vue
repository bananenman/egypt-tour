<script setup>
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>
 
<template>
  <SpeedInsights />
  <div>
    <nuxt v-if="!$slots.default" />
    <slot />
  </div>
</template>