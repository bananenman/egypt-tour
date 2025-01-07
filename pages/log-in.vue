<template>
  <div class="container">
    <picture>
      <source media="(max-width: 600px)" srcset="https://res.cloudinary.com/dndfdqrtr/image/upload/v1735614494/cairo-alt-mobile_m0cctd.webp">
      <source class="ee" media="(min-width: 1000px)" srcset="https://res.cloudinary.com/dndfdqrtr/image/upload/v1735614495/cairo-alt_ydd9af.webp">
      <nuxt-img class="background" provider="cloudinary" src="/cairo-alt_ydd9af.webp" alt="Panorama of Cairo taken on the Cairo tower"/>
    </picture>
    <form action="" method="post" class="form">
      <div class="form_container">
        <h1>Login</h1>
        <div class="uname_div">
          <label for="uname"><b>E-Mail</b></label>
          <input type="email" placeholder="Enter your E-Mail" name="uname" required>
        </div>


        <div class="upass_div">
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter your Password" name="psw" required>
        </div>

        <div class="log_div">
          <a class="link" href="/forgot">Forgot password?</a>
          <div class="check_container">
            <input type="checkbox" class="check" name="remember">
            <label class="remember_label" for="remember">Remember me?</label>
            <p>By clicking Login, you agree to our <a href="/policies/privacy-policy">Terms of Service</a> and <a href="/policies/privacy-policy">Privacy Policy.</a></p>
          </div>
            <button class="log-in" type="submit">Login</button>
        </div>

        <div class="sign_div">
          <p>No Account yet?</p>
          <a class="link" href="/sign-up">SIGN UP</a>
        </div>
      </div>
    </form> 
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
  @use "~/assets/log-in.scss";
</style>