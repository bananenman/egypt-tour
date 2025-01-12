<script lang="ts" setup>
definePageMeta({
  middleware: ["guest-only"],
});

const currentUser = useAuthUser();
</script>

<template>
  <div class="div">
    <PageTitle title="Guest page" />
    <PageDescription description="This page should only be accessible to guests." />
    <PageUser :user="currentUser" />
  </div>
</template>

<style>
.div{
  position: relative;
  top: 30em;
  height: 30em;
  outline: 1px solid red;
}

</style>