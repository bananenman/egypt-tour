
<template>
    <title>Home</title>
    <html lang="en"></html>
    <meta name="title" content="Home">
    <meta name="description" content="Portfolio of BananenMan">
    <link async href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <body>
      <header>
        <a class="logo" href="/">EgyTour</a>
        <nav>
            <ul class="nav__links">
              <li class="index"><a href="/">Home</a></li>
              <li class="about-eg"><a href="about-eg">About Egypt</a></li>
              <li class="prices"><a href="prices">Prices</a></li>
              <li class="route"><a href="route">Route</a></li>

              <li class="dropdown">
                <a href="#" aria-label="Visit my Github Profile" class="dropbtn"><img src="" alt="Dropdown Button" @click="myFunction()" class="drop__button"></a>
                <div class="dropdown-content" id="Dropdown">
                    <a href="prices">Prices</a>
                    <a href="mailto:bananenmaninquiries@gmail.com" aria-label="Contact us via Mail" class="cta-drop-down"><button class="cta-drop">Contact Us</button></a>
                </div>
              </li>

            </ul>
        </nav>
        <a href="mailto:bananenmaninquiries@gmail.com" aria-label="Contact us via Mail"><button class="cta">Contact Us</button></a>
    </header>

    <div class="container">
      <img class="pyramids" src="/cairo.webp">
      <div class="txt-introduction">
        <div class="item-content">
          <h1>Welcome to</h1>
          <h2>Egypt</h2>
          <p>We offer multiple amazing tours through it's Cities & deserts.</p>
        </div>
      </div>

      <div class="btns-div">
        <button class="introduction-btn" @click="introductionRedirect()">Placeholder</button>
      </div>
    </div>

    <div class="container-anc">
      <img class="anc-egy" src="/ancient-egy.webp">
      <div class="txt-anc">
        <div class="anc-content">
          <h1>Ancient Egypt</h1>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus rhoncus blandit donec natoque quam. Adipiscing curabitur vestibulum pulvinar at morbi, nam fusce. Platea placerat nullam augue potenti fermentum felis dictum. Suscipit sapien feugiat facilisi venenatis dolor morbi. Metus adipiscing ex integer finibus aptent dapibus aenean. Luctus dignissim luctus vestibulum cursus ligula maecenas. Mattis ante ipsum molestie vitae ultrices conubia ut penatibus. Amet sem risus vitae lacinia; erat eros elit ac?</p>
        </div>
      </div>
    </div>

    <p class="pop-egy">Most popular places in Egypt</p>
    <div class="container-items">
      <div class="item item-1">
        <img src="">
        <div class="grid-content">
          <h3>Rocket Tap</h3>
          <p>In Rocket Tap you tap the screen to not crash!</p>
          <button @click="RocketRedirect()" class="item-btn">View</button>
        </div>
      </div>

      <div class="item item-2">
        <img src="">
        <div class="grid-content">
          <h3>Application.Quit()</h3>
          <p>Application.Quit() is a game where you quit...</p>
          <button @click="ApplicationRedirect()" class="item-btn">View</button>
        </div>
      </div>

      <div class="item item-3">
        <img src="">
        <div class="grid-content">
          <h3>Flappy Bird</h3>
          <p>Flappy Bird is a remake of the original game.</p>
          <!-- <a @click="FlappyRedirect()" class="item-btn">View</a> -->
          <button @click="FlappyRedirect()" class="item-btn">View</button>
        </div>
      </div>
      <div class="item item-4">
        <img src="">
        <div class="grid-content">
          <h3>Flappy Bird</h3>
          <p>Flappy Bird is a remake of the original game.</p>
          <!-- <a @click="FlappyRedirect()" class="item-btn">View</a> -->
          <button @click="FlappyRedirect()" class="item-btn">View</button>
        </div>
      </div>
      <div class="item item-5">
        <img src="">
        <div class="grid-content">
          <h3>Flappy Bird</h3>
          <p>Flappy Bird is a remake of the original game.</p>
          <!-- <a @click="FlappyRedirect()" class="item-btn">View</a> -->
          <button @click="FlappyRedirect()" class="item-btn">View</button>
        </div>
      </div>
      <div class="item item-6">
        <img src="">
        <div class="grid-content">
          <h3>Flappy Bird</h3>
          <p>Flappy Bird is a remake of the original game.</p>
          <!-- <a @click="FlappyRedirect()" class="item-btn">View</a> -->
          <button @click="FlappyRedirect()" class="item-btn">View</button>
        </div>
      </div>
      <div class="item item-7">
        <img src="">
        <div class="grid-content">
          <h3>Flappy Bird</h3>
          <p>Flappy Bird is a remake of the original game.</p>
          <!-- <a @click="FlappyRedirect()" class="item-btn">View</a> -->
          <button @click="FlappyRedirect()" class="item-btn">View</button>
        </div>
      </div>
      <div class="item item-8">
        <img src="">
        <div class="grid-content">
          <h3>Flappy Bird</h3>
          <p>Flappy Bird is a remake of the original game.</p>
          <!-- <a @click="FlappyRedirect()" class="item-btn">View</a> -->
          <button @click="FlappyRedirect()" class="item-btn">View</button>
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
  </script>