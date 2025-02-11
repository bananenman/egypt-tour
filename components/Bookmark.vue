<template>

    <div class="container">
        <img class="bk_img">
        <div class="text_container">
            <h1></h1>
            <p>{{ JSON.stringify(user, null, 2) }}</p>
        </div>
    </div>

</template>

<script lang="ts" setup>

defineProps<{ user: string | null }>();

</script>

<style lang="scss">
  @use "~/assets/users/bookmark.scss";
</style>
