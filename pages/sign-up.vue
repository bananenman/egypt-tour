<template>
  <title>Sign Up</title>
  <html lang="en"></html>
  <meta name="title" content="Home">
  <meta name="description" content="Sign Up to EgyTour">

  <div class="container">
    <picture>
      <source media="(max-width: 600px)" srcset="https://res.cloudinary.com/dndfdqrtr/image/upload/v1735614494/cairo-alt-mobile_m0cctd.webp">
      <source class="ee" media="(min-width: 1000px)" srcset="https://res.cloudinary.com/dndfdqrtr/image/upload/v1735614495/cairo-alt_ydd9af.webp">
      <nuxt-img class="background" provider="cloudinary" src="/cairo-alt_ydd9af.webp" alt="Panorama of Cairo taken on the Cairo tower"/>
    </picture>

    <form method="POST" class="form">
      <div class="form_container">
        <h1>Sign Up</h1>
        <div class="uname_div">
          <label for="uname"><b>E-Mail</b></label>
          <input type="email" placeholder="Enter your E-Mail" name="uname" required>
        </div>


        <div class="upass_div">
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter your Password" name="psw" required>
        </div>

        <div class="log_div">
          <div class="check_container">
            <input type="checkbox" class="check" name="remember">
            <label class="remember_label" for="remember">Remember me?</label>
            <p>By clicking Sign Up, you agree to our <a href="/policies/privacy-policy">Terms of Service</a> and <a href="/policies/privacy-policy">Privacy Policy.</a></p>
          </div>
            <input formaction="/api/sign-up" type="submit" value="Submit">
        </div>

        <div class="sign_div">
          <p>Already have an Account?</p>
          <a class="link" href="/log-in">LOGIN</a>
        </div>
      </div>
    </form> 
  </div>
</template>

<script setup>
 async function submit() {
  await $fetch("/api/sign-up", { 
    headers: {
        "Content-Type": "multipart/form-data",
    },
    method: 'POST',
    body: {
      firstName: 'John ',
      lastName: 'Doe',
      email: 'example@mail.com',
      password: 'myPassIsSafeNow9'
    },
  })
}
</script>

<style lang="scss">
  @use "~/assets/sign-up.scss";
</style>