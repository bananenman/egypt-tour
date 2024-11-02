
<template>
    <title>Pyramids of Giza</title>
    <html lang="en"></html>
    <meta name="title" content="Pyramids of Giza">
    <meta name="description" content="Tours around the pyramids of Giza">
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <body>
      <div class="info-container">
          <nuxt-img provider="cloudinary" src="/pyramids_pc2vmw.webp" alt="Great Pyramids of Giza"/>
          <div class="info-content">
            <div class="info-text">
              <h1>Pyramids of Giza</h1>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
              <a href="/" class="info-btn">Route</a>
              <a href="/" class="info-btn-t">Book a Tour</a>
            </div>
          </div>
      </div>
    </body>
  
</template>
  
<style>
@import url("../../assets/info/giza.css");
</style>
  
<script setup>

useSeoMeta({
  title: 'Pyramids of Giza',
})
  
definePageMeta({
  layout: 'default'
})

</script>