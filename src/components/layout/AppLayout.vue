<template>
  <v-app id="inspire">
    <AppBar />
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="1"> </v-col>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="6">
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="3">
            <v-sheet rounded="lg" min-height="268" class="bg-grey-lighten-3">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppBar from '../layout/AppBar.vue';
import AppFooter from '../layout/AppFooter.vue';

export default {
  name: 'AppLayout',
  components: { AppBar, AppFooter },
};
</script>

<style scoped></style>
