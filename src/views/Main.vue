<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-card style="height: 50vh">
          <v-card-title>Q&A</v-card-title>
          <MainContent :items="qnas" />
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card style="height: 50vh">
          <v-card-title>커뮤니티</v-card-title>
          <MainContent :items="communitys" />
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card style="height: 50vh">
          <v-card-title>WEEKLY BEST</v-card-title>
          <MainContent :items="communitys" />
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card style="height: 50vh">
          <v-card-title>EDITOR'S CHOICE</v-card-title>
          <MainContent :items="communitys" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MainContent from '@/components/MainContent.vue';

export default {
  components: { MainContent },
  setup() {
    const search = '';
    const qnas = [
      {
        id: '오구패밀리',
        date: '약 10시간 전',

        contentTitle: '질문합니다.',
        contentId: '',
        views: '0',
        comments: '0',
      },
      {
        id: '오구패밀리2',
        date: '약 11시간 전',
        contentTitle: '질문합니다.',
        contentId: '',
        views: '0',
        comments: '0',
      },
      {
        id: '오구패밀리2',
        date: '약 11시간 전',
        contentTitle: '질문합니다.',
        contentId: '',
        views: '0',
        comments: '0',
      },
      {
        id: '오구패밀리2',
        date: '약 11시간 전',
        contentTitle: '질문합니다.',
        contentId: '',
        views: '0',
        comments: '0',
      },
      {
        id: '오구패밀리2',
        date: '약 11시간 전',
        contentTitle: '질문합니다.',
        contentId: '',
        views: '0',
        comments: '0',
      },
    ];
    const communitys = [
      {
        id: '오구패밀리',
        date: '약 10시간 전',

        contentTitle: '질문합니다.',
        contentId: '',
        views: '0',
        comments: '0',
      },
      {
        id: '오구패밀리2',
        date: '약 11시간 전',
        contentTitle: '질문합니다.',
        contentId: '',
        views: '0',
        comments: '0',
      },
      {
        id: '오구패밀리2',
        date: '약 11시간 전',
        contentTitle: '질문합니다.',
        contentId: '',
        views: '0',
        comments: '0',
      },
      {
        id: '오구패밀리2',
        date: '약 11시간 전',
        contentTitle: '질문합니다.',
        contentId: '',
        views: '0',
        comments: '0',
      },
      {
        id: '오구패밀리2',
        date: '약 11시간 전',
        contentTitle: '질문합니다.',
        contentId: '',
        views: '0',
        comments: '0',
      },
    ];
    return { search, qnas, communitys };
  },
};
</script>

<style></style>
