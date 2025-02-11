<template>
    <title>Your Account</title>
    <html lang="en"></html>
    <meta name="title" content="Your Account">
    <meta name="description" content="Your EgyTour Account">

  <body>
    <div class="user_container">
      <div class="user">
        <i class="bx bx-user"></i>

        <div class="user_mail">
          <h1>Your Email:</h1>
          <p>{{ currentUser?.email }}</p>
        </div>

        <div class="user_pass">
          <h1>Your Roles:</h1>
          <p>{{ currentUser?.roles }}</p>
        </div>

        <button class="logout" @click="onLogoutClick" :disabled="form.pending">Logout</button>
      </div>
      
      <!-- TODO -->
      <div class="wishlist">
        <h1>Wishlist</h1>
        <!-- <Bookmark :user="userVar" /> -->
      </div>
    </div>
  </body>
</template>

<style lang="scss">
  @use "~/assets/users/account.scss";
</style>

<script lang="ts" setup>
import type { User } from "~/shared/types";

definePageMeta({
  middleware: ["user-only"],
});

defineProps<{ user: User | null }>();
const currentUser = useAuthUser();
const { logout } = useAuth();
const form = reactive({
  pending: false,
});

async function onLogoutClick() {
  try {
    form.pending = true;

    await logout();
    await location.reload();
  } catch (error) {
    console.error(error);
  } finally {
    form.pending = false;
  }
}

/* BookmarkGet() */

</script>

<!-- <script lang="ts">
const authUser = useAuthUser();

let userVar: string

async function BookmarkGet() {
  if (authUser.value) {
    await $fetch("/bookmark/allBookmarks", {
        method: "GET",
        onResponse({ response }) {
          userVar = console.log(response)
        }
    });
  } 
}

</script> -->