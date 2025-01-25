
<template>
    <title>Cruising the Nile</title>
    <html lang="en"></html>
    <meta name="title" content="Cruising the Nile">
    <meta name="description" content="Tour around the Nile">

    <body>
      <div class="loader_effect" id="loader_effect">
        <div class="loader" id="loader"></div>
      </div> 
      
      <div class="info-container">
        <picture>
          <source media="(max-width: 600px)" srcset="https://res.cloudinary.com/dndfdqrtr/image/upload/v1734190647/nile_info_small_khobqg.webp">
          <source class="ee" media="(min-width: 1000px)" srcset="https://res.cloudinary.com/dndfdqrtr/image/upload/v1734190702/nile_info_big_wr10ck.webp">
          <nuxt-img provider="cloudinary" src="/nile_info_big_wr10ck.webp" alt="Luxor Temple & Tomb"/>
        </picture>
          <div class="info-content">
            <div class="info-text">
              <h1>Cruising the Nile</h1>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
              <button class="route_btn" @click="getLocation()">Route</button>
              <button class="bookmark_btn" @click="onBookmarkClick()"><i id="book_img" class='bx bx-bookmark-alt-plus'></i></button>
            </div>
          </div>
      </div>

      <div class="map_container"> 
        <div class="map_info">
          <p>*Note that this map provides a route for car travel</p>
        </div>
        <div class="map" id="map">

          <div class="map_text" id="map_text">
          
          </div>
        </div>
      </div>
    </body>
  
</template>
  
<style lang = "scss">
  @use "~/assets/info/info.scss";
</style>
  
<script setup>

useSeoMeta({
  title: 'Pyramids of Giza',
})
  
definePageMeta({
  layout: 'default'
})

BookmarkGet()

</script>


<script>
const { postBookmark } = useBookmark();
const { getBookmark } = useBookmark();
const authUser = useAuthUser();

import L from 'leaflet';
const body = document.body;

function scrollMap() {
  const map = document.getElementById("map");
  map.style.border = "5px solid #8b4513";

  body.style.height = "";
  body.style.overflowY = "";
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader_effect").style.display = "none";

  map.scrollIntoView({
    block: "center",
    behavior: "smooth"
  })
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(ShowMap, showError);
    document.getElementById("loader").style.display = "block";
    document.getElementById("loader_effect").style.display = "block";
    body.style.height = "100%";
    body.style.overflowY = "hidden";
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      body.style.height = "";
      body.style.overflowY = "";
      document.getElementById("loader").style.display = "none";
      document.getElementById("loader_effect").style.display = "none";
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
  let myAPIKey = MAP_KEY;
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

  const toWaypoint = [22.336944, 31.625556]; // latitude, longitude
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
  await setTimeout(scrollMap, 1000)
}  

const form = reactive({
  data: {
    tourId: 1,
  },
  error: "",
  pending: false,
});

async function onBookmarkClick() {
  try {
    form.error = "";
    form.pending = true;
      
    if (authUser.value) {
      await postBookmark(form.data.tourId, authUser.value.email);
      return;
    } 
    await location.reload()
    await location.replace('/users/login')
    } catch (error) {
    console.error(error);
    if (!(error instanceof FetchError)) {
      throw error;
    }

    form.error = error.data.message;
  } finally {
    form.pending = false;
  }
}

async function BookmarkGet() {

  if (authUser.value) {
    await getBookmark();
  } 
}
</script>