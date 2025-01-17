<template>
  <!-- <main-layout></main-layout> -->
  <!-- <auth-layout></auth-layout> -->
  <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import { useRoute } from "vue-router";
import MainLayout from "./layout/mainLayout.vue";
import AuthLayout from "./layout/authLayout.vue";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    console.log(route);
    

    return {
      layout: computed(() => route.meta.layout),
    };
  },
  components: { MainLayout, AuthLayout },
};
</script>

