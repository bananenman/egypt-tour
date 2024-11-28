
<template>
    <title>Abu Simbel</title>
    <html lang="en"></html>
    <meta name="title" content="Abu Simbel">
    <meta name="description" content="Tour around Abu Simbel">
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>

    <body>
      <div class="info-container">
          <nuxt-img provider="cloudinary" src="/egy-abu_hfevvk.webp" alt="Abu Simbel - Temple of Ramses the second"/>
          <div class="info-content">
            <div class="info-text">
              <h1>Abu Simbel</h1>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
              <button class="info-btn" @click="MapAPI()">Route</button>
              <button class="info-btn-t">Book a Tour</button>
            </div>
          </div>
      </div>

      <div id="map" class="map"></div>
      
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

<script>
import L from 'leaflet'

function MapAPI() {
  var myAPIKey = "113bfd19b1f24f6687cdc8c00b83a638";
  const LocLat = "https://api.geoapify.com/v1/ipinfo?&apiKey=e5e49754549f44b2aede82be3c9680f4";
  const LocLong = "https://api.geoapify.com/v1/ipinfo?&apiKey=e5e49754549f44b2aede82be3c9680f4";
  console.log(LocLat.location.latitude)

}


</script>
