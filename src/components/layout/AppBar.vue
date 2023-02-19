<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex justify-center">
      <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>

      <router-link v-for="link in links" :key="link" :to="link.url">
        <v-btn variant="text">{{ link.name }}</v-btn>
      </router-link>
      <v-spacer></v-spacer>

      <v-responsive max-width="200" max-height="100">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          density="compact"
          hide-details
          variant="outlined"
          label="검색"
        ></v-text-field>
      </v-responsive>
      <router-link to="/signin">
        <v-btn rounded="pill" color="primary"> 로그인 </v-btn>
      </router-link>
      <router-link to="/signup">
        <v-btn rounded="pill" color="primary"> 회원가입 </v-btn>
      </router-link>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  data: () => ({
    links: [
      { name: 'Q&A', url: '/questions' },
      { name: '지식', url: '/knowledge' },
      { name: '커뮤니티', url: '/community' },
      { name: '이벤트', url: '/events' },
      { name: 'JOBS', url: '/jobs' },
      { name: '공지사항', url: '/notice' },
    ],
  }),
};
</script>

<style></style>
