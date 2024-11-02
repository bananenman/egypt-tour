
<template>
    <title>Luxor's Temples & Tombs</title>
    <html lang="en"></html>
    <meta name="title" content="Luxor's Temples & Tombs">
    <meta name="description" content="Tour around Luxor's Temples & Tombs">
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <body>
      <div class="info-container">
          <nuxt-img provider="cloudinary" src="/egy-luxor_papbl0.webp" alt="Luxor Temple & Tomb"/>
          <div class="info-content">
            <div class="info-text">
              <h1>Luxor's Temples & Tombs</h1>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
              <a href="/" class="info-btn">Route</a>
              <a href="/" class="info-btn-t">Book a Tour</a>
            </div>
          </div>
      </div>
    </body>
  
</template>
  
<style>
@import url("../../assets/info/luxor.css");
</style>
  
<script setup>

useSeoMeta({
  title: "Luxor's Temples & Tombs",
})
  
definePageMeta({
  layout: 'default'
})

</script>