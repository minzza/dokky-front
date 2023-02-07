<template>
  <v-app id="inspire">
    <AppBar />
    <router-view />
  </v-app>
</template>

<script>
import AppBar from './AppBar.vue';

export default {
  name: 'AppLayout',
  components: { AppBar },
};
</script>

<style scoped></style>
