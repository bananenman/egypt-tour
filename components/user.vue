<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>

</script>

<script lang="ts">
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
</script>

<style>

</style>