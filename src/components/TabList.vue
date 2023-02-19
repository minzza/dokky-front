<template>
  <div class="d-flex justify-space-between mb-3 mt-3">
    <router-link :to="items.at(0).value">
      <v-btn><v-icon icon="mdi-pencil"></v-icon> 작성하기</v-btn>
    </router-link>

    <div>
      <router-link
        v-for="(item, index) in items"
        :key="index + 1"
        :to="item.value"
      >
        <v-btn variant="text" v-if="index != 0">{{ item.label }}</v-btn>
      </router-link>
    </div>

    <v-btn><v-icon icon="mdi-pencil"></v-icon>최신순</v-btn>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    items: {
      type: Array,
      require: true,
    },
  },
});
</script>

<style scoped></style>
