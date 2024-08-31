
<template>
    <title>Home</title>
    <html lang="en"></html>
    <meta name="title" content="Home">
    <meta name="description" content="Tours in Egypt by EgyTour">
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <body>
      <header>
        <a class="logo" href="/">EgyTour</a>
        <nav>
            <ul class="nav__links">
              <li class="index"><a href="/">Home</a></li>
              <li class="about-eg"><a href="about-eg">About Egypt</a></li>
              <li class="prices"><a href="prices">Prices</a></li>
              <li class="route"><a href="route">Routes</a></li>

              <li class="dropdown">
                <a href="#" aria-label="Visit my Github Profile" class="dropbtn"><img src="/MenuPng.webp" alt="Dropdown Button" @click="myFunction()" class="drop__button"></a>
                <div class="dropdown-content" id="Dropdown">
                  <a href="/">Home</a>
                  <a href="https://www.example.com/">About Egypt</a>
                    <a href="https://www.example.com/">Prices</a>
                    <a href="https://www.example.com/">Routes</a>
                    <a href="mailto:bananenmaninquiries@gmail.com" aria-label="Contact us via Mail" class="cta-drop-down">Contact Us</a>
                </div>
              </li>

            </ul>
        </nav>
        <a href="mailto:bananenmaninquiries@gmail.com" aria-label="Contact us via Mail"><button class="cta">Contact Us</button></a>
    </header>

    <div class="container">
      <img class="background" loading="eager" src="/cairo.webp">
      <div class="txt-introduction">
        <div class="item-content">
          <h1>Welcome to</h1>
          <h2>Egypt</h2>
          <p>We offer multiple amazing tours through it's Cities & deserts.</p>
        </div>
      </div>

      <div class="btns-div">
        <button class="introduction-btn" @click="tourScroll()">Available Tours</button>
      </div>
    </div>

    <div class="container-anc">
      <img class="anc-egy" loading="lazy" src="/ancient-egy.webp">
      <div class="txt-anc">
        <div class="anc-content">
          <h1>Ancient Egypt</h1>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
        </div>
      </div>
    </div>

    <p class="pop-egy" id="tours">Most popular places in Egypt</p>
    <div class="container-items">
      <div class="item item-1">
        <img loading="lazy" src="/pyramids.webp">
        <div class="grid-content">
          <h3>Pyramids of Giza</h3>
          <p>The Pyramids of Giza - one of the most recognizable landmarks.</p>
          <button @click="RocketRedirect()" class="item-btn">Tours</button>
        </div>
      </div>

      <div class="item item-2">
        <img loading="lazy" src="/egy-abu.webp">
        <div class="grid-content">
          <h3>Abu Simbel</h3>
          <p>Ramses II's great temple, decorated with wall paintings and guarded by statues.</p>
          <button @click="RocketRedirect()" class="item-btn">Tours</button>
        </div>
      </div>

      <div class="item item-3">
        <img loading="lazy" src="/egy-luxor.webp">
        <div class="grid-content">
          <h3>Luxor's Temples & Tombs</h3>
          <p>Flappy Bird is a remake of the original game.</p>
          <button @click="RocketRedirect()" class="item-btn">Tours</button>
        </div>
      </div>
      <div class="item item-4">
        <img loading="lazy" src="/egy-nile.webp">
        <div class="grid-content">
          <h3>Cruising the Nile</h3>
          <p>Egypt is defined by the Nile. For many, their cruise upon this waterway is their highlight.</p>
          <button @click="RocketRedirect()" class="item-btn">Tours</button>
        </div>
      </div>
      <div class="item item-5">
        <img loading="lazy" src="/egy-dive.webp">
        <div class="grid-content">
          <h3>Diving the Red Sea</h3>
          <p>The Red Sea is very renowned among scuba divers due to the amount of sea life present.</p>
          <button @click="RocketRedirect()" class="item-btn">Tours</button>
        </div>
      </div>
      <div class="item item-6">
        <img loading="lazy" src="/egy-salt.webp">
        <div class="grid-content">
          <h3>Egypt's White Desert</h3>
          <p>Here in White Desert National Park, stand white chalk pinnacles stranded amid sand.</p>
          <button @click="RocketRedirect()" class="item-btn">Tours</button>
        </div>
      </div>
    </div>

    <footer>
      <div class="footerContainer">
          <div class="socialIcons">
            <a href="https://www.example.com/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-github"></i></a>
            <a href="https://www.example.com/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-facebook"></i></a>
            <a href="https://www.example.com/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-twitter"></i></a>
            <a href="https://www.example.com/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-pinterest-alt"></i></a>
            <a href="https://www.example.com/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-instagram"></i></a>
          </div>
          <div class="footerNav">
              <ul>
                  <li><a href="https://www.example.com/">About Egypt</a></li>
                  <li><a href="https://www.example.com/">Prices</a></li>
                  <li><a href="https://www.example.com/">Routes</a></li>
                  <li><a href="mailto:bananenmaninquiries@gmail.com">Contact Us</a></li>
              </ul>
          </div>
          
      </div>
      <div class="footerBottom">
          <p>Made by<span class="designer">David</span></p>
      </div>
    </footer>
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
  </script>