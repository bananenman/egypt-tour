
<template>
    <title>Abu Simbel</title>
    <html lang="en"></html>
    <meta name="title" content="Abu Simbel">
    <meta name="description" content="Tour around Abu Simbel">
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <body>
      <div class="info-container">
          <nuxt-img provider="cloudinary" src="/egy-luxor_info_znvoed.webp" alt="Abu Simbel - Temple of Ramses the second"/>
          <div class="info-content">
            <div class="info-text">
              <h1>Abu Simbel</h1>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
              <a href="/" class="info-btn">Route</a>
              <a href="/" class="info-btn-t">Book a Tour</a>
            </div>
          </div>
          <iframe class="map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD4iE2xVSpkLLOXoyqT-RuPwURN3ddScAI&q=Eiffel+Tower,Paris+France" width=400 height=350 allowfullscreen></iframe>
      </div>
      
    </body>
  
</template>
  
<style>
@import url("../../assets/info/abu.css");
</style>
  
<script setup>

useSeoMeta({
  title: 'Abu Simbel',
})
  
definePageMeta({
  layout: 'default'
})

</script>