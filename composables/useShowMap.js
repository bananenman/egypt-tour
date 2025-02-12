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

function getLocation(lat, long) {
  if (navigator.geolocation) {
      if(document.getElementById('map').className !== 'map leaflet-container leaflet-touch leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom')
      {
        navigator.geolocation.getCurrentPosition(function() {
          showError
          ShowMap(lat, long)
        })

        document.getElementById("loader").style.display = "block";
        document.getElementById("loader_effect").style.display = "block";
        body.style.height = "100%";
        body.style.overflowY = "hidden";
        return 
      } else{
        scrollMap()
        return;
      }
    
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

async function ShowMap(lat, long) {
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

  const toWaypoint = [lat, long]; // latitude, longitude
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

export { getLocation }