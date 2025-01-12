<script lang="ts" setup>
definePageMeta({
  middleware: ["user-only"],
});

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

<template>
  <div class="dd">
    <PageTitle title="Private page" />
    <PageDescription description="This page should only be visible if user is connected" />
    <PageUser :user="currentUser" />
    <button @click="onLogoutClick" :disabled="form.pending"></button>
  </div>
</template>

<style>

.dd{
  width: 100%;
  height: 50em;
  top: 10em;
  position: relative;
  outline: 1px solid red;

  PageUser{
    outline: 1px solid red;
    position: relative;
    top: 20em;
    width: 10em;
    height: 10em;
  }
}

</style>