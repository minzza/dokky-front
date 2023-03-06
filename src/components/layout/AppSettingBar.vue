<template>
  <v-menu min-width="50px" rounded>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar
          image="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          size="small"
        />
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <router-link :to="'/settings/profile'">
            <font-awesome-icon icon="fa-person" />
            <span class="font-medium ml-1">내 프로필</span>
          </router-link>
          <v-divider class="my-3"></v-divider>
          <router-link :to="'/settings/account'">
            <font-awesome-icon icon="fa-gear" />
            <span class="font-medium ml-1">내 계정</span>
          </router-link>
          <v-divider class="my-3"></v-divider>
          <router-link :to="'/settings/activity'">
            <font-awesome-icon icon="fa-rotate-right" />
            <span class="font-medium ml-1">활동내역</span>
          </router-link>
          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text" @click="logout">
            <font-awesome-icon icon="fa-right-from-bracket" />
            <span class="font-medium ml-1">로그아웃</span>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
export default {
  setup() {
    const logout = () => {
      alert('로그아웃 하시겠습니까?');
    };

    return {
      logout,
    };
  },
};
</script>
