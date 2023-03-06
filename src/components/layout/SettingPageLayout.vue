<template>
  <v-app id="inspire">
    <AppBar />
    <v-main class="">
      <v-container class="pa-0">
        <v-card>
          <v-layout>
            <v-navigation-drawer>
              <p class="pa-6 text-h5">내 계정</p>
              <v-list nav>
                <v-list-item to="/settings/profile">
                  <font-awesome-icon icon="fa-circle-user" />
                  <span class="font-medium ml-1">회원정보</span>
                </v-list-item>
                <v-list-item to="/settings/account">
                  <font-awesome-icon icon="fa-gear" />
                  <span class="font-medium ml-1">계정</span>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
            <v-main>
              <router-view />
            </v-main>
          </v-layout>
        </v-card>
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppBar from '../layout/AppBar.vue';
import AppFooter from '../layout/AppFooter.vue';

export default {
  name: 'SettingPageLayout',
  components: { AppBar, AppFooter },
};
</script>

<style scoped></style>
