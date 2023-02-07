<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>

      <v-btn v-for="link in links" :key="link" variant="text">
        <router-link style="text-decoration: none" :to="link.url"
          >{{ link.name }}
        </router-link>
      </v-btn>

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
      <v-btn rounded="pill" color="primary"> 로그인 d</v-btn>
      <v-btn rounded="pill" color="primary"> 회원가입 </v-btn>
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
