<template>
  <the-navbar></the-navbar>
  <the-sidebar></the-sidebar>
  <div class="container with-nav">
    <app-message></app-message>
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "@/components/theNavbar.vue";
import TheSidebar from "@/components/theSidebar.vue";
import AppMessage from "@/components/ui/appMessage.vue";
export default {
  components: { TheNavbar, AppMessage, TheSidebar },
};
</script>

<style>
</style>