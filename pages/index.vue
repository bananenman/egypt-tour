<template>
    <title>Home</title>
    <html lang="en"></html>
    <meta name="title" content="Home">
    <meta name="description" content="Tours in Egypt by EgyTour">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='preload' as="style">

    <body>
      <div class="container">
        <nuxt-img class="background" provider="cloudinary" src="/cairo_rtcfyg.webp" alt="Panorama of Cairo taken on the Cairo tower"/>
        <div class="txt-introduction">
          <div class="item-content">
            <h1>Welcome to</h1>
            <h2>Egypt</h2>
            <p>We offer multiple amazing tours through it's Cities & sights.</p>
          </div>
        </div>

        <div class="btns-div">
          <button class="introduction-btn" @click="tourScroll()">Available Tours</button>
        </div>
      </div>

      <div class="container-anc">
        <nuxt-img class="anc-egy" provider="cloudinary" src="/ancient-egy_jfipjo.webp" alt="Pharaoh in sarcophagus"/>
        <div class="txt-anc">
          <div class="anc-content">
            <h1>Ancient Egypt</h1>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
          </div>
        </div>
      </div>

      <p class="pop-egy" id="tours">Tourist Attractions we visit on our Tours</p>
      <div class="container-items">
        <div class="item item-1">
          <nuxt-img loading="lazy" provider="cloudinary" src="/pyramids_pc2vmw.webp" alt="Great Pyramids of Giza"/>
          <div class="grid-content">
            <h1>Pyramids of Giza</h1>
            <p>The Pyramids of Giza - one of the most recognizable landmarks.</p>
            <a href="/info/giza-tour" class="item-btn">Tour</a>
          </div>
        </div>

        <div class="item item-2">
          <nuxt-img loading="lazy" provider="cloudinary" src="/egy-abu_hfevvk.webp" alt="Abu Simbel - Temple of Ramses the second"/>
          <div class="grid-content">
            <h1>Abu Simbel</h1>
            <p>Ramses II's great temple, decorated with wall paintings and guarded by statues.</p>
            <a href="/info/abu-tour" class="item-btn">Tour</a>
          </div>
        </div>

        <div class="item item-3">
          <nuxt-img loading="lazy" provider="cloudinary" src="/egy-luxor_papbl0.webp" alt="Luxor Temple & Tomb"/>
          <div class="grid-content">
            <h1>Luxor Temple & Tomb</h1>
            <p>The Luxor Temple may have been the place where crowning took place.</p>
            <a href="/info/luxor-tour" class="item-btn">Tour</a>
          </div>
        </div>
        <div class="item item-4">
          <nuxt-img loading="lazy" provider="cloudinary" src="/egy-nile_fefntk.webp"/>
          <div class="grid-content">
            <h1>Cruising the Nile</h1>
            <p>Egypt is defined by the Nile. For many, their cruise upon this waterway is their highlight.</p>
            <a href="/nile-tour" class="item-btn">Tour</a>
          </div>
        </div>
        <div class="item item-5">
          <nuxt-img loading="lazy" provider="cloudinary" src="/egy-dive_x7pvjl.webp"/>
          <div class="grid-content">
            <h1>Diving the Red Sea</h1>
            <p>The Red Sea is very renowned among scuba divers due to the amount of sea life present.</p>
            <a href="/dive-tour" class="item-btn">Tour</a>
          </div>
        </div>
        <div class="item item-6">
          <nuxt-img loading="lazy" provider="cloudinary" src="/egy-salt_cx0bot.webp"/>
          <div class="grid-content">
            <h1>Egypt's White Desert</h1>
            <p>Here in White Desert National Park, stand white chalk pinnacles stranded amid sand.</p>
            <a href="/salt-tour" class="item-btn">Tour</a>
          </div>
        </div>
      </div>
    </body>
  
  </template>
  
<style>
  @import url("../assets/index.css");
</style>
  
<script setup>
  
  useSeoMeta({
    title: 'Home',
  })
    
  definePageMeta({
    layout: 'default'
  })

  function tourScroll() {
    tours.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }


  function GithubRedirect()
  {
    window.open("https://bananenman.vercel.app/")
  }
</script>