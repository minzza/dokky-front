<template>
  <v-sheet min-height="70vh" rounded="lg">
    <v-container>
      <v-banner :avatar="mainContents.img" lines="one">
        <v-banner-text>
          {{ mainContents.title }}
        </v-banner-text>

        <v-banner-text>
          <div class="d-inline-flex">
            <div class="d-inline-flex align-center">
              <font-awesome-icon icon="fa-eye" />
              <span class="font-medium ml-1">
                {{ mainContents.activityScore }}
              </span>
              <span class="sr-only">views</span>
            </div>
            <div class="d-inline-flex align-center">
              · {{ mainContents.regDt }} ·
            </div>
            <div class="d-inline-flex align-center">
              <font-awesome-icon icon="fa-regular fa-comment" />
              <span class="font-medium ml-1"> {{ comment.count }} </span>
              <span class="sr-only">comments</span>
            </div>
          </div>
        </v-banner-text>
        <template v-slot:actions>
          <div class="mx-auto text-center">
            <a @click="sharedBtn">
              <font-awesome-icon icon="fa-arrow-up-from-bracket" />
            </a>
          </div>
          <div class="mx-auto text-center pl-4">
            <a @click="bookmarkBtn">
              <font-awesome-icon icon="fa-regular fa-bookmark" />
            </a>
          </div>
        </template>
      </v-banner>
      <v-textarea
          variant="outlined"
          no-resize
          rows="10"
          shaped
          :model-value="value"
          readonly
      ></v-textarea>


      <div>
        <v-chip-group
            mandatory
            selected-class="text-primary"
        >
          <v-chip
              v-for="tag in tags"
              :key="tag"
          >
            #{{ tag }}
          </v-chip>
        </v-chip-group>

        <v-spacer></v-spacer>
        <div class="align-end">
          <v-btn variant="text" @click="likeDecrease">
            <font-awesome-icon icon="fa-chevron-down" />
          </v-btn>
          {{ mainContents.like }}
          <v-btn variant="text" @click="likeIncrement">
            <font-awesome-icon icon="fa-chevron-up" />
          </v-btn>
        </div>
      </div>

      <!--////////////////////////////////////////////////////////////////////-->

      <v-divider class="my-3"></v-divider>



    </v-container>
  </v-sheet>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const tags = [
      'JAVA',
      'Back-end',
      'study',
    ];

    const sharedBtn = () => {
      alert('공유');
    };

    const bookmarkBtn = () => {
      alert("북마크");
    }
    return {
      mainContents,
      tags,
      sharedBtn,
      bookmarkBtn
    }
  },
};
</script>

<style scoped></style>
