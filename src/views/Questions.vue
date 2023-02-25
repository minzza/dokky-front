<template>
  <div class="pa-4">
    Q&A<br />좋은 질문과 답변으로 동료의 시간을 아껴주세요.
  </div>

  <tab-list :items="tabs" />

  <div class="d-flex justify-space-between border-t-sm border-b-sm pa-3">
    <v-btn><v-icon icon="mdi-cached"></v-icon></v-btn>
    <v-responsive max-width="200" max-height="100">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        density="compact"
        hide-details
        variant="outlined"
        label="검색"
      ></v-text-field>
    </v-responsive>
    <div>1/6499 페이지</div>
  </div>

  <div class="mb-9">
    <div class="overflow-hidden">
      <page-content :items="items" />
    </div>
  </div>
</template>

<script>
import TabList from '@/components/TabList.vue';
import PageContent from '@/components/PageContent.vue';
export default {
  components: {
    TabList,
    PageContent,
  },
  setup() {
    const my = 'questions';

    const tabs = [
      { label: '작성하기', value: my + '/new' },
      { label: '기술', value: my + '/tech' },
      { label: '커리어', value: my + '/career' },
      { label: '기타', value: my + '/qna-etc' },
      { label: '전체', value: my },
    ];
    const items = [
      {
        id: 'id최민준1',
        date: '약 7시간 전',
        title: '너무 하기 귀찮다 그치',
        tab: '사는얘기',
        tags: [{ label: '사이드프로젝트' }, { label: '스터디' }],
        views: 120,
        comments: 12,
        likes: 18,
      },
      {
        id: 'id최민준2',
        date: '약 10시간 전',
        title: '정말정말요',
        tab: '모임&스터디',
        tags: [{ label: '스터디' }],
        views: 11,
        comments: 2,
        likes: 3,
      },
    ];
    return { tabs, items };
  },
};
</script>

<style scoped></style>
