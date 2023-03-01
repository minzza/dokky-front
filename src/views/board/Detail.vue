<template>
  <v-sheet min-height="70vh" rounded="lg">
    <v-container>
      <v-banner
          lines="one"
          color="deep-purple-accent-4"
      >
        <template v-slot:prepend>
          <v-avatar image="https://cdn.vuetifyjs.com/images/parallax/material.jpg" size="small" />
        </template>

        <v-banner-text>
          가나다라마바사아자차카
        </v-banner-text>

        <v-banner-text>
          <div class="d-inline-flex">
            <div class="d-inline-flex align-center">
              <font-awesome-icon icon="fa-eye" />
              <span class="font-medium ml-1"> 11 </span>
              <span class="sr-only">views</span>
            </div>
            <div class="d-inline-flex align-center">
              · 42분 전 ·
            </div>
            <div class="d-inline-flex align-center">
              <font-awesome-icon icon="fa-regular fa-comment" />
              <span class="font-medium ml-1"> 12 </span>
              <span class="sr-only">comments</span>
            </div>
          </div>
        </v-banner-text>
        <template v-slot:actions>
          <div class="mx-auto text-center">
            <router-link :to="''">
              <font-awesome-icon icon="fa-arrow-up-from-bracket" />
            </router-link>
          </div>
          <div class="mx-auto text-center pl-4">
            <router-link :to="''">
              <font-awesome-icon icon="fa-regular fa-bookmark" />
            </router-link>
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

      </div>



    </v-container>
  </v-sheet>
</template>

<script>
export default {
  setup() {
    const tags = [
      'JAVA',
      'Back-end',
      'study',
    ];
    return { tags }
  },
}
</script>

<style scoped>

</style>