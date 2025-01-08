<template>
    <title>Error - EgyTour</title>
    <html lang="en"></html>
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <NuxtLayout>
      <body>
        <div class="container">
          <div class="content">
              <p class="p1">{{ error.statusCode + ' ' + error.message }}
                <NuxtLink class="home" to="/">
                  Go Home
                </NuxtLink>
              </p>
          </div>
        </div>
      </body>
  </NuxtLayout>
</template>
  
<style lang = "scss">
  @use "~/assets/error.scss";
</style>

<script setup lang="ts">
const error = useError();
</script>