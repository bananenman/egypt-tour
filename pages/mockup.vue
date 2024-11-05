<template>
    <title>Error</title>
    <html lang="en"></html>
    <meta name="title" content="Error">
    <meta name="description" content="404 Mockup Page">
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <body>
      <div class="container">
        <div class="content">
            <h1>NOT FOUND!</h1>
            <p class="p1">Mockup page to replace links.</p>
        </div>
      </div>
    </body>
</template>
  
<style>
  @import url("../assets/mockup.css");
</style>
  
<script setup>
  
  useSeoMeta({
    title: 'Error',
  })
    
  definePageMeta({
    layout: 'default'
  })
</script>