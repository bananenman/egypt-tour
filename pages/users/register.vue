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

    <form @submit.prevent="onRegisterClick" class="form">
      <div class="form_container">
        <h1>Sign Up</h1>
        <div class="email_div">
          <label for="email"><b>E-Mail</b></label>
          <input type="email" id="email_input" placeholder="Enter your E-Mail" name="email" v-model="form.data.email" required>
        </div>


        <div class="password_div">
          <label for="password"><b>Password</b></label>
          <input type="password" id="pass_input" placeholder="Enter your Password" name="password" v-model="form.data.password" required>
        </div>

        <div class="log_div">
          <div class="check_container">
            <input type="checkbox" class="check" v-model="form.data.rememberMe" name="remember">
            <label class="remember_label" for="remember">Remember me?</label>
            <p>By clicking Sign Up, you agree to our <a href="/policies/privacy-policy">Terms of Service</a> and <a href="/policies/privacy-policy">Privacy Policy.</a></p>
          </div>
          <input type="submit" value="Sign Up">
        </div>

        <div class="sign_div">
          <p>Already have an Account?</p>
          <a class="link" href="/log-in">LOGIN</a>
        </div>
      </div>
    </form> 
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Sign Up',
})
  
definePageMeta({
  middleware: ["guest-only"],
  layout: 'default',
})

import { FetchError } from 'ofetch'
const { register } = useAuth();

const form = reactive({
  data: {
    email: "",
    password: "",
    rememberMe: false,
  },
  error: "",
  pending: false,
});

async function onRegisterClick() {
  try {
    form.error = "";
    form.pending = true;

    await register(form.data.email, form.data.password, form.data.rememberMe);

    await navigateTo('/private');
  } catch (error) {
    console.error(error);
    if (!(error instanceof FetchError)) {
      throw error;
    }

    form.error = error.data.message;
  } finally {
    form.pending = false;
  }
}
</script>

<style lang="scss">
  @use "~/assets/users/register.scss";
</style>