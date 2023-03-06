<template>
  <v-card-text>
    <v-list>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        class="pa-3 border-b-sm"
      >
        <div class="mb-2">
          <v-list-item-title class="d-inline-flex">
            <router-link :to="'/users/' + item.id + '/activity'">
              {{ item.id }}
            </router-link>
          </v-list-item-title>
          ·
          <v-list-item-title class="d-inline-flex">
            {{ item.date }}
          </v-list-item-title>
          ·
          <div class="d-inline-flex">
            <div class="d-inline-flex align-center">
              <font-awesome-icon icon="fa-eye" />
              <span class="font-medium ml-1">{{ item.views }}</span>
              <span class="sr-only">views</span>
            </div>
            <div class="d-inline-flex align-center ml-1">
              <font-awesome-icon icon="fa-regular fa-comment" />
              <span class="font-medium ml-1">{{ item.comments }}</span>
              <span class="sr-only">comments</span>
            </div>
          </div>
        </div>
        <v-list-item-subtitle style="font-size: 18px">
          <router-link :to="'/question/' + item.contentId">
            {{ item.contentTitle }}
          </router-link>
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card-text>
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
