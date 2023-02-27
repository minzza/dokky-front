<template>
  <v-menu min-width="50px" rounded>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar color="blue" size="small" />
      </v-btn>
    </template>

    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <v-btn rounded variant="text">
            <font-awesome-icon icon="fa-person" />
            <span class="font-medium ml-1">내 프로필</span>
          </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text">
            <font-awesome-icon icon="fa-gear" />
            <span class="font-medium ml-1">내 계정</span>
          </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text">
            <font-awesome-icon icon="fa-rotate-right" />
            <span class="font-medium ml-1">활동내역</span>
          </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text">
            <font-awesome-icon icon="fa-right-from-bracket" />
            <span class="font-medium ml-1">로그아웃</span>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
export default {
};
</script>