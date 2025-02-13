![Modern Tour Provider](public/sitepic.jpg)
<h4 align="center"> Modern Tour Provider </h4>
<p align="center">
    <img src="https://img.shields.io/badge/Open%20Source-Yes-orange?style=flat-square">
    <img src="https://img.shields.io/badge/Maintained-No-cyan?style=flat-square">
    <img src="https://img.shields.io/badge/Written%20In-CSS, JS, TS, HTML-blue?style=flat-square">
</p>

## [📃] Description
EgyTour is a Website that represents a mockup for booking tours in Egypt.

## [⬇️] Installation
 - `git clone https://github.com/bananenman/egypt-tour.git`
 - `cd egypt-tour`
 - `npm run dev`

## [🛠] Tools used
- <a href="https://nuxt.com/">Nuxt.js</a>
- **Nuxt Packages Used: <a href="https://cloudinary.nuxtjs.org/">nuxtjs/cloudinary</a>, <a href="https://www.npmjs.com/package/@nuxt/image-edge">nuxtjs/nuxt-image-edge</a>, <a href="https://nuxtseo.com/docs/robots/getting-started/introduction">nuxtjs/robots</a>**

- **<a href="https://www.mongodb.com/">MongoDB</a>**
- **<a href="https://cloudinary.com/home">Cloudinary</a>**
- **<a href="https://sass-lang.com/">Sass</a>**
  
- **<a href="https://www.geoapify.com/">Geoapify</a>**
- **<a hreF="https://leafletjs.com/">Leaflet</a>**

## [🍃] MongoDB
This is a preview of what a document generated when user signs up will look like.

The password is encrypted using a hash

![image](https://github.com/user-attachments/assets/27a066bb-3603-43bf-aaea-fbf3f77c156c)

## [🔧] Middleware
- Users can **not** enter Login / Sign-up pages if they are logged in
- Users can **not** enter Account page if they are **not** logged in

## [📕] Bookmarking
- Bookmarking only works if the user is logged in
- On page load (/info/*) site will try to load user's bookmark

## [📋] Features
 - Geolocation via geoapify
 - Bookmark feature
 - Account creation / log in
 - RWD for Phones + PCs


## [👀] Ideas
- Add text to right side of map on info pages (makes problems with map positioning)
- Add bookmark list on Account page
- More RWD for 450px - ~900px
