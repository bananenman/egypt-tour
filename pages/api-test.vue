<script setup lang="ts">
async function addTodo() {
  console.log("clicked")
  const data = await useFetch('/api/todos', {
    method: 'POST',
    body: {
      hello: 'world'
    }
  })
}
</script>

<template>
   <span v-else-if="data">Todos: {{ data }}</span>
  <button @click="addTodo()">CLICK ME</button>
</template>

<style>
button{
  position: absolute;
  top: 50em;
}
</style>