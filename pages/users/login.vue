<template>
  <title>Log In</title>
  <html lang="en"></html>
  <meta name="title" content="Log In">
  <meta name="description" content="Log In to EgyTour">

  <div class="container">
    <picture>
      <source media="(max-width: 600px)" srcset="https://res.cloudinary.com/dndfdqrtr/image/upload/v1735614494/cairo-alt-mobile_m0cctd.webp">
      <source class="ee" media="(min-width: 1000px)" srcset="https://res.cloudinary.com/dndfdqrtr/image/upload/v1735614495/cairo-alt_ydd9af.webp">
      <nuxt-img class="background" provider="cloudinary" src="/cairo-alt_ydd9af.webp" alt="Panorama of Cairo taken on the Cairo tower"/>
    </picture>
    <form @submit.prevent="onLoginClick" class="form">
      <div class="form_container">
        <h1>Login</h1>
        <div class="uname_div">
          <label for="uname"><b>E-Mail</b></label>
          <input type="email" placeholder="Enter your E-Mail" name="uname" v-model="form.data.email" required>
        </div>


        <div class="upass_div">
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter your Password" name="psw" v-model="form.data.password" required>
        </div>

        <div class="log_div">
          <a class="link" href="/forgot">Forgot password?</a>
          <div class="check_container">
            <input type="checkbox" class="check" v-model="form.data.rememberMe" name="remember">
            <label class="remember_label" for="remember">Remember me?</label>
            <p>By clicking Login, you agree to our <a href="/policies/privacy-policy">Terms of Service</a> and <a href="/policies/privacy-policy">Privacy Policy.</a></p>
          </div>
            <button class="log-in" type="submit" :disabled="form.pending">Login</button>
        </div>

        <div class="sign_div">
          <p class="no_acc">No Account yet?</p>
          <a class="link" href="/users/register">SIGN UP</a>
        </div>
      </div>
    </form> 
  </div>
</template>

<script lang="ts" setup>
import { FetchError } from "ofetch";

definePageMeta({
  middleware: ["guest-only"],
  layout: 'default',
});

const { login } = useAuth();

const form = reactive({
  data: {
    email: "",
    password: "",
    rememberMe: false,
  },
  error: "",
  pending: false,
});

async function onLoginClick() {
  try {
    form.error = "";
    form.pending = true;

    await login(form.data.email, form.data.password, form.data.rememberMe);

    await location.reload();
    await navigateTo('/users/account')
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
  @use "~/assets/users/login.scss";
</style>