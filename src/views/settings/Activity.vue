<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col
        cols="8"
        style="
          height: 180px;
          border: 1px solid hsla(220, 9%, 46%, 0.3);
          border-radius: 10px;
        "
      >
        <v-row class="border-b-sm pa-6" style="height: 120px">
          <v-col cols="1" class="border mr-2"></v-col>
          <v-col cols="9">
            <v-row>
              <h1>민짜</h1>
            </v-row>
            <v-row>활동점수 0</v-row>
          </v-col>
          <v-col cols="1">
            <v-btn
              variant="outlined"
              size="large"
              style="
                border: 1px solid hsla(220, 9%, 46%, 0.3);
                font-size: 14px;
                height: 35px;
              "
              >나의 계정
            </v-btn>
          </v-col>
        </v-row>
        <v-row style="height: 60px">
          <v-col cols="1" class="pa-2">
            <v-btn variant="plain" size="large">최근활동</v-btn>
          </v-col>
          <v-col cols="1" class="pa-2">
            <v-btn variant="plain" size="large">게시물</v-btn>
          </v-col>
          <v-col cols="1" class="pa-2">
            <v-btn variant="plain" size="large">스크랩</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center">
      <br />
      <v-col cols="8" class="border-b-sm"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Activity',
};
</script>

<style scoped></style>
