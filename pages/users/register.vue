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
        <div class="uname_div">
          <label for="email"><b>E-Mail</b></label>
          <input type="email" id="email_input" placeholder="Enter your E-Mail" name="email" v-model="form.data.email" required>
        </div>


        <div class="upass_div">
          <label for="password"><b>Password</b></label>
          <input type="password" id="pass_input" placeholder="Enter your Password" name="password" v-model="form.data.password" required>
        </div>

        <div class="log_div">
          <div class="check_container">
            <input type="checkbox" class="check" v-model="form.data.rememberMe" name="remember">
            <label class="remember_label" for="remember">Remember me?</label>
            <p>By clicking Sign Up, you agree to our <a href="/policies/privacy-policy">Terms of Service</a> and <a href="/policies/privacy-policy">Privacy Policy.</a></p>
          </div>
          <button class="log-in" type="submit" :disabled="form.pending">Sign Up</button>
        </div>

        <div class="sign_div">
          <p class="alr_acc">Already have an Account?</p>
          <a class="link" href="/users/login">LOGIN</a>
        </div>
      </div>
    </form> 
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Sign Up',
})
  
definePageMeta({
  middleware: ["guest-only"],
  layout: 'default',
})

</script>

<script>
import { FetchError } from 'ofetch'
const { register } = useAuth();

const mailArray = [
  'gmail.com', 
  'yahoo.com',
  'hotmail.com',
  'aol.com',
  'hotmail.co.uk',
  'hotmail.fr',
  'msn.com',
  'yahoo.fr',
  'live.com',
  'gmx.de',
  'web.de',
  'outlook.com',
  'yandex.ru',
  'mail.ru'
]

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

    if(mailArray.includes(form.data.email.split('@')[1])) {
      if(form.data.password.length > 8) {

        await register(form.data.email, form.data.password, form.data.rememberMe);
        await location.reload();
        await navigateTo('/users/account')
      } else{
        window.alert('Your password must be atleast 8 charachters long.')
      }
    } else{
      window.alert('Sorry, this email domain is not whitelisted.')
    }
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