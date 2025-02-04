<template>
   <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
   
    <body class="">
      <BaseHeader />
      <header id="header">
        <a class="logo" href="/">EgyTour</a>
        <nav>
            <ul class="nav__links">
              <li class="index"><a href="/">Home</a></li>
              <li class="about-eg"><a href="https://egypt-tour.vercel.app/#anc">About</a></li>
              <li class="route"><a href="/">Routes</a></li>

              <li class="dropdown">
                <a class="dropbtn" @click="Dropdown()"><img src="/MenuPng.webp" alt="Dropdown Button" class="drop__button"></a>
                <div class="dropdown-content" id="dropdown_content">
                  <button class="exit_button" id="exit_button" @click="CloseDropdown()"><img src="/MenuClose.webp" alt="Close Dropdown" class="drop__close"></button>
                  <a href="/">Home</a>
                  <a href="/">About</a>
                  <a href="/">Routes</a>
                  <a href="mailto:bananenmaninquiries@gmail.com" aria-label="Contact us via Mail" class="cta-drop-down">Contact Us</a>
                  <a href="/users/login" id="login_text" aria-label="Log in to EgyTour" class="log-drop-down">Log In / Sign Up</a>
                  <div class="drop_socialIcons">
                    <a href="/facebook" aria-label="Visit my Github Profile" ><i class="bx bxl-facebook"></i></a>
                    <a href="/twitter" aria-label="Visit my Github Profile"><i class="bx bxl-twitter"></i></a>
                    <a href="/pinterest" aria-label="Visit my Github Profile"><i class="bx bxl-pinterest-alt"></i></a>
                    <a href="/instagram" aria-label="Visit my Github Profile"><i class="bx bxl-instagram"></i></a>
                  </div>
                </div>
              </li>

            </ul>
        </nav>
        <a href="mailto:bananenmaninquiries@gmail.com" id="cta-button" aria-label="Contact us via Mail"><button class="cta">Contact Us</button></a>
        <a href="/users/login" id="login_text" aria-label="Log in to EgyTour"><button class="log" id="log">Log in / Sign Up</button></a>
    </header>
    <slot />

    <div id="cookie" class="cookieContainer">
      <div class="cookieText">
        <h1>Cookie Notice</h1>
        <p>We use cookies, to ensure you get the best experience on our website.</p>
        <p><a href="/policies/cookie-policy" aria-label="Look at our Cookie Policy">Cookie Policy</a></p>
        <button id="ck_close" @click="Notice()">Only Essential Cookies.</button>
        <button id="ck_close" @click="Notice()">Accept all Cookies</button>
      </div>
    </div>

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
          <a href="https://bananenman.vercel.app/" target="_blank">Made by<span class="designer">David</span></a>
      </div>
    </footer>
  </body>
</template>

<style lang = "scss">
  @use "~/assets/layout/layout.scss";
</style>

<script setup>

const user = useAuthUser()

if(!user.value) {
    return;
  } else {
    HeaderText()
  }

if(!localStorage.getItem('popState')) {
  document.body.className = "cookieConsent"
}

</script>


<script>

function HeaderText() {
  document.getElementById('log').textContent = 'Account'
}

function Notice() {
  localStorage.setItem('popState','shown')
  document.getElementById("cookie").style.display = "none";
}

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