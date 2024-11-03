
<template>
    <title>Egypt's White Desert</title>
    <html lang="en"></html>
    <meta name="title" content="Egypt's White Desert">
    <meta name="description" content="Tour around Egypt's White Desert">
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <body>
      <div class="info-container">
          <nuxt-img provider="cloudinary" src="/egy-salt_info_phdiez.webp"/>
          <div class="info-content">
            <div class="info-text">
              <h1>Egypt's White Desert</h1>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
              <a href="/" class="info-btn">Route</a>
              <a href="/" class="info-btn-t">Book a Tour</a>
            </div>
          </div>
      </div>
    </body>
  
</template>
  
<style>
@import url("../../assets/info/salt.css");
</style>
  
<script setup>

useSeoMeta({
  title: "Egypt's White Desert",
})
  
definePageMeta({
  layout: 'default'
})

</script>