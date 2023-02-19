<template>
  <ul class="v-divider">
    <li class="py-4 border-b-sm" v-for="(item, index) in items" :key="index">
      <div class="flex flex-column">
        <div class="flex flex-sm-shrink-0">
          <a class="text-truncate">{{ item.id }}</a>
          <div class="d-inline-flex">1.1</div>
          <span class="">{{ item.date }}</span>
        </div>
        <div class="my-2">
          <a>{{ item.title }}</a>
        </div>
        <div class="d-flex justify-space-between">
          <div class="d-flex">
            <a class="rounded mr-1">{{ item.tab }}</a>
            <div class="d-flex" v-for="(tag, index) in item.tags" :key="index">
              #{{ tag.label }}
            </div>
          </div>
          <div class="d-flex mr-2">
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
            <div class="d-inline-flex align-center ml-1">
              <font-awesome-icon icon="fa-regular fa-thumbs-up" />
              <span class="font-medium ml-1">{{ item.likes }}</span>
              <span class="sr-only">likes</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
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
