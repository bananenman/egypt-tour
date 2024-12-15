<template>
   <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
   
    <body>
      <header id="header">
        <a class="logo" href="/">EgyTour</a>
        <nav>
            <ul class="nav__links">
              <li class="index"><a href="/">Home</a></li>
              <li class="about-eg"><a href="about">About</a></li>
              <li class="route"><a href="route">Routes</a></li>

              <li class="dropdown">
                <a class="dropbtn" @click="Dropdown()"><img src="/MenuPng.webp" alt="Dropdown Button" class="drop__button"></a>
                <div class="dropdown-content" id="dropdown_content">
                  <button class="exit_button" id="exit_button" @click="CloseDropdown()"><img src="/MenuClose.webp" alt="Close Dropdown" class="drop__close"></button>
                  <a href="/">Home</a>
                  <a href="/">About</a>
                  <a href="/">Routes</a>
                  <a href="mailto:bananenmaninquiries@gmail.com" aria-label="Contact us via Mail" class="cta-drop-down">Contact Us</a>
                  <a href="mailto:bananenmaninquiries@gmail.com" aria-label="Contact us via Mail" class="log-drop-down">Log In</a>
                  <div class="drop_socialIcons">
                    <a href="/facebook" aria-label="Visit my Github Profile" ><i class="bx bxl-facebook"></i></a>
                    <a href="/twitter" aria-label="Visit my Github Profile"><i class="bx bxl-twitter"></i></a>
                    <a href="/pinterest" aria-label="Visit my Github Profile"><i class="bx bxl-pinterest-alt"></i></a>
                    <a href="/instagram" aria-label="Visit my Github Profile"><i class="bx bxl-instagram"</i></a>
                  </div>
                </div>
              </li>

            </ul>
        </nav>
        <a href="mailto:bananenmaninquiries@gmail.com" id="cta-button" aria-label="Contact us via Mail"><button class="cta">Contact Us</button></a>
        <a href="info/giza-tour#map_container" aria-label="Log in to EgyTour"><button class="log">Log in / Sign Up</button></a>
    </header>
    <slot />

    <footer>
      <div class="footerContainer">
          <div class="socialIcons">
            <a href="/facebook" aria-label="Visit my Github Profile" ><i class="bx bxl-facebook"></i></a>
            <a href="/twitter" aria-label="Visit my Github Profile"><i class="bx bxl-twitter"></i></a>
            <a href="/pinterest" aria-label="Visit my Github Profile"><i class="bx bxl-pinterest-alt"></i></a>
            <a href="/instagram" aria-label="Visit my Github Profile"><i class="bx bxl-instagram"</i></a>
          </div>
          <div class="footerNav">
              <ul>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Prices</a></li>
                  <li><a href="/">Routes</a></li>
                  <li><a href="mailto:bananenmaninquiries@gmail.com">Contact</a></li>
              </ul>
          </div>
          
      </div>
      <div class="footerBottom">
          <p>Made by<span class="designer" @click="SiteRedirect()">David</span></p>
      </div>
    </footer>
  </body>
</template>

<style lang = "scss">
  @use "~/assets/layout/layout.scss";
</style>

<script setup>
  function SiteRedirect()
  {
    window.open("https://bananenman.vercel.app/")
  }
</script>

<script>

function Dropdown() 
{
  document.getElementById("dropdown_content").style.animationName = "slide-in"
  document.getElementById("header").style.backgroundColor = "transparent"
  document.getElementById("dropdown_content").style.display = "block"
  /* document.body.style.overflow = "hidden" */
  
}

function CloseDropdown()
{
  document.getElementById("header").style.backgroundColor = "#DBC1AA"
  document.getElementById("dropdown_content").style.animationName = "slide-out"
  setTimeout(function(){
    document.getElementById("dropdown_content").style.display = "none"
    /* document.body.style.overflow = "" */
  }, 900)
  
}

</script>