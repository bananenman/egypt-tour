
<template>
    <title>Pyramids of Giza</title>
    <html lang="en"></html>
    <meta name="title" content="Pyramids of Giza Tour">
    <meta name="description" content="Tours around the pyramids of Giza">
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
                  <a href="/">About Egypt</a>
                    <a href="/">Prices</a>
                    <a href="/">Routes</a>
                    <a href="mailto:bananenmaninquiries@gmail.com" aria-label="Contact us via Mail" class="cta-drop-down">Contact Us</a>
                </div>
              </li>

            </ul>
        </nav>
        <a href="mailto:bananenmaninquiries@gmail.com" aria-label="Contact us via Mail"><button class="cta">Contact Us</button></a>
    </header>

    <div class="info-container">
        <img src="/pyramids.webp" loading="lazy" alt="Pyramids of Giza">
        <div class="info-content">
          <div class="info-text">
            <h1>Pyramids of Giza</h1>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
            <a href="/" class="info-btn">Route</a>
            <a href="/" class="info-btn-t">Book a Tour</a>
          </div>
        </div>
    </div>

    <footer>
      <div class="footerContainer">
          <div class="socialIcons">
            <a href="/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-github"></i></a>
            <a href="/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-facebook"></i></a>
            <a href="/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-twitter"></i></a>
            <a href="/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-pinterest-alt"></i></a>
            <a href="/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-instagram"></i></a>
          </div>
          <div class="footerNav">
              <ul>
                  <li><a href="/">About Egypt</a></li>
                  <li><a href="/">Prices</a></li>
                  <li><a href="/">Routes</a></li>
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
@import url("../assets/giza.css");
</style>
  
<script setup>

useSeoMeta({
  title: 'Pyramids of Giza',
})
  
definePageMeta({
  layout: 'default'
})

</script>