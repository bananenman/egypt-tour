<template>
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
                <a href="#" aria-label="Visit my Github Profile" class="dropbtn"><img src="/MenuPng.webp" alt="Dropdown Button" class="drop__button"></a>
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
    <slot />

    <footer>
      <div class="footerContainer">
          <div class="socialIcons">
            <a href="/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-facebook"></i></a>
            <a href="/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-twitter"></i></a>
            <a href="/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-pinterest-alt"></i></a>
            <a href="/" aria-label="Visit my Github Profile" @click="GithubRedirect()"><i class="bx bxl-instagram"</i></a>
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
          <p>Made by<span class="designer" @click="GithubRedirect()">David</span></p>
      </div>
    </footer>
  </body>
</template>

<style>
  @import url("../assets/layout/layout.css");
</style>

<script setup>
  function GithubRedirect()
  {
    window.open("https://bananenman.vercel.app/")
  }
</script>