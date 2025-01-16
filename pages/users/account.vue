<template>
    <title>Your Account</title>
    <html lang="en"></html>
    <meta name="title" content="Your Account">
    <meta name="description" content="Your EgyTour Account">

  <body>
    <div class="user_container">
      <code>
        <pre>current user: {{ JSON.stringify(currentUser, null, 2) }}</pre>
        <button class="dd" @click="onLogoutClick" :disabled="form.pending">Logout</button>
      </code>
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

</script>