<template>
  <v-app id="inspire">
    <AppBar />
    <v-main class="">
      <v-container> <router-view /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '../layout/AppBar.vue';
export default {
  components: { AppBar },
};
</script>

<style scoped></style>
