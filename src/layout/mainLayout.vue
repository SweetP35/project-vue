<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <app-message></app-message>
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "@/components/theNavbar.vue";
import AppMessage from "@/components/ui/appMessage.vue";
export default {
  components: { TheNavbar, AppMessage },
};
</script>

<style>
</style>