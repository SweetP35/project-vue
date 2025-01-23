<template>
  <div class="container">
    <app-message></app-message>
    <router-view />
  </div>
</template>

<script>
import AppMessage from "@/components/ui/appMessage.vue";
export default {
  components: { AppMessage },
};
</script>
