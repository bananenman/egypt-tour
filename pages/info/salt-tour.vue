
<template>
    <title>Egypt's White Desert</title>
    <html lang="en"></html>
    <meta name="title" content="Egypt's White Desert">
    <meta name="description" content="Tour around Egypt's White Desert">
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>

    <body>
      <div class="info-container">
          <nuxt-img provider="cloudinary" src="/egy-salt_info_phdiez.webp"/>
          <div class="info-content">
            <div class="info-text">
              <h1>Egypt's White Desert</h1>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
              <button class="info-btn" @click="getLocation()">Route</button>
              <button class="info-btn-t">Book a Tour</button>
            </div>
          </div>
      </div>

      <div id="map" class="map"></div>
    </body>
  
</template>
  
<style lang = "scss">
  @use "~/assets/info/info.scss";
</style>
  
<script setup>

useSeoMeta({
  title: "Egypt's White Desert",
})
  
definePageMeta({
  layout: 'default'
})

</script>


<script>
import L from 'leaflet'

function getLocation() {
  if (navigator.geolocation) {
    map.scrollIntoView({ // Scrolls the Map into view.
      behavior: "smooth",
      block: "center"
    })
    navigator.geolocation.getCurrentPosition(ShowMap, showError);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

async function ShowMap() {
  var myAPIKey = "113bfd19b1f24f6687cdc8c00b83a638";
  const LocLat = await $fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=e5e49754549f44b2aede82be3c9680f4")
  const LocLong = await $fetch("https://api.geoapify.com/v1/ipinfo?&apiKey=e5e49754549f44b2aede82be3c9680f4")

  // The Leaflet map Object
  const map = L.map('map').setView([37.98376, 23.72784], 3);;

  // Retina displays require different mat tiles quality
  const isRetina = L.Browser.retina;

  const baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
  const retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";

  // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
  L.tileLayer(isRetina ? retinaUrl : baseUrl, {
    attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" rel="nofollow" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" rel="nofollow" target="_blank">© OpenStreetMap</a> contributors',
    apiKey: myAPIKey,
    maxZoom: 20,
    id: 'osm-bright',
  }).addTo(map);


  const fromWaypoint = [JSON.stringify(LocLat.location.latitude), JSON.stringify(LocLong.location.longitude)]; // latutude, longitude
  const fromWaypointMarker = L.marker(fromWaypoint).addTo(map).bindPopup("Your City");

  const toWaypoint = [27.277336, 28.200442]; // latitude, longitude
  const toWaypointMarker = L.marker(toWaypoint).addTo(map).bindPopup("Abu Simbel, Egypt");

  const turnByTurnMarkerStyle = {
    radius: 5,
    fillColor: "#fff",
    color: "#555",
    weight: 1,
    opacity: 1,
    fillOpacity: 1
  }

  fetch(`https://api.geoapify.com/v1/routing?waypoints=${fromWaypoint.join(',')}|${toWaypoint.join(',')}&mode=drive&apiKey=${myAPIKey}`).then(res => res.json()).then(result => {
    // Note! GeoJSON uses [longitude, latutude] format for coordinates
    L.geoJSON(result, {
      style: (feature) => {
        return {
          color: "rgba(20, 137, 255, 0.7)",
          weight: 5
        };
      }
    }).bindPopup((layer) => {
      return `${layer.feature.properties.distance} ${layer.feature.properties.distance_units}, ${layer.feature.properties.time}`
    }).addTo(map);

    // collect all transition positions
    const turnByTurns = [];
    result.features.forEach(feature => feature.properties.legs.forEach((leg, legIndex) => leg.steps.forEach(step => {
      const pointFeature = {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": feature.geometry.coordinates[legIndex][step.from_index]
        },
        "properties": {
          "instruction": step.instruction.text
        }
      }
      turnByTurns.push(pointFeature);
    })));

    L.geoJSON({
      type: "FeatureCollection",
      features: turnByTurns
    }, {
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, turnByTurnMarkerStyle);
      }
    }).bindPopup((layer) => {
      return `${layer.feature.properties.instruction}`
    }).addTo(map);

  }, error => console.log(err));
}  
</script>