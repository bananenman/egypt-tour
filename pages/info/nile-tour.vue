
<template>
    <title>Cruising the Nile</title>
    <html lang="en"></html>
    <meta name="title" content="Cruising the Nile">
    <meta name="description" content="Tour around the Nile">
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <body>
      <div class="info-container">
          <nuxt-img provider="cloudinary" src="/egy-nile_fefntk.webp"/>
          <div class="info-content">
            <div class="info-text">
              <h1>Cruising the Nile</h1>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
              <a href="/" class="info-btn">Route</a>
              <a href="/" class="info-btn-t">Book a Tour</a>
            </div>
          </div>
      </div>
    </body>
  
</template>
  
<style>
@import url("../../assets/info/nile.css");
</style>
  
<script setup>

useSeoMeta({
  title: 'Pyramids of Giza',
})
  
definePageMeta({
  layout: 'default'
})

</script>