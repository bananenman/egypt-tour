
<template>
    <title>Luxor's Temples</title>
    <html lang="en"></html>
    <meta name="title" content="Luxor's Temples">
    <meta name="description" content="Tour around Luxor's Temples">

    <body>
      <div class="loader_effect" id="loader_effect">
        <div class="loader" id="loader"></div>
      </div> 

      <div class="info-container">
        <picture>
          <source media="(max-width: 600px)" srcset="https://res.cloudinary.com/dndfdqrtr/image/upload/v1734190651/luxor_info_small_izpynt.webp">
          <source class="ee" media="(min-width: 1000px)" srcset="https://res.cloudinary.com/dndfdqrtr/image/upload/v1734190656/luxor_info_big_ffaaba.webp">
          <nuxt-img provider="cloudinary" src="/luxor_info_big_ffaaba.webp" alt="Luxor Temple & Tomb"/>
        </picture>
          <div class="info-content">
            <div class="info-text">
              <h1>Luxor's Temples</h1>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
              <button class="route_btn" @click="locationMap()">Route</button>
              <button class="bookmark_btn" @click="onBookmarkClick()" aria-label="Name"><i id="book_img" class='bx bx-bookmark-alt-plus'></i></button>
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
  title: "Luxor's Temples",
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

import { getLocation } from '~/composables/useShowMap';
function locationMap() {
  getLocation(25.7, 32.639167)
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