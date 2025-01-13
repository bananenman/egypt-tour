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

<template>
  <body>
    <div class="user_container">
      <code>
        <pre>current user: {{ JSON.stringify(currentUser, null, 2) }}</pre>
        <button class="dd" @click="onLogoutClick" :disabled="form.pending">Logout</button>
      </code>
    </div>
    <form class="form">
      <div class="form_line">
        <h4>Upload multiple files by clicking the link below or by dragging and dropping images onto the dashed region</h4>
        <div class="form_controls">
          <div class="upload_button_holder">
            <input type="file" id="fileElem" onchange="cloudinaryImageUploadMethod(this.file)">
          </div>
        </div>
      </div>
    </form>
    <div id="gallery" />
  </body>
</template>

<style lang="scss">
  @use "~/assets/users/account.scss";
</style>