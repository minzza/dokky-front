<template>
  <ul>
    <li class="border-b-sm pa-3" v-for="(item, i) in items" :key="i">
      <div class="d-flex">
        <div class="pa-1">{{ item.id }} · {{ item.date }}</div>
      </div>
      <div>
        <div class="pa-1">{{ item.title }}</div>
      </div>

      <div class="d-flex justify-space-between">
        <div class="d-flex">
          <div
            class="pa-1 mr-3"
            style="
              color: blue;
              background-color: lightskyblue;
              opacity: 0.5;
              border-radius: 10px;
            "
          >
            {{ item.tab }}
          </div>

          <div class="d-flex flex-row pa-1">
            <div class="mr-1" v-for="(tag, j) in item.tags" :key="j">
              #{{ tag.label }}
            </div>
          </div>
        </div>
        <div class="d-flex mr-1">
          <div class="d-flex align-center mr-1">
            <font-awesome-icon icon="fa-eye" />
            <span class="ml-1">{{ item.views }}</span>
          </div>
          <div class="d-flex align-center">
            <font-awesome-icon icon="fa-regular fa-comment" />
            <span class="ml-1">{{ item.comments }}</span>
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
