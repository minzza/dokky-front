<template>
  <v-sheet>
    <v-form ref="form">
      <v-container>
        <v-row>
          <v-col cols="8">
            <div class="pa-3">
              <div class="text-h6">회원정보</div>
            </div>
            <v-text-field label="이름"
                          variant="outlined"
            ></v-text-field>
            <v-text-field label="닉네임"
                          variant="outlined"
            ></v-text-field>
            <div>
              <div class="text-body-1">관심있는 기술 태그 입력</div>
              <v-autocomplete
                  v-model="tags"
                  :items="tag"
                  closable-chips
                  color="blue-grey-lighten-2"
                  item-title="name"
                  item-value="code"
                  variant="outlined"
                  label="사용 중인 기술이나 관심있는 기술 태그를 선택해주세요."
                  multiple
              >
                <template v-slot:chip="{ props, item }">
                  <v-chip
                      v-bind="props"
                      :prepend-avatar="item.raw.avatar"
                      :text="item.raw.name"
                  ></v-chip>
                </template>
              </v-autocomplete>
            </div>
          </v-col>
          <v-col align-self="center">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                  class="mx-auto rounded-circle"
                  max-width="150"
                  v-bind="props"
              >
                <v-img
                    :width="150"
                    :height="150"
                    aspect-ratio="1/1"
                    cover
                    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                    class="rounded-circle"
                    @click="modifyImg"
                >
                  <v-expand-transition>
                    <div
                        v-if="isHovering"
                        class="d-flex transition-fast-in-fast-out v-card--reveal bg-grey-lighten-4 text-h8"
                    >
                      변경
                    </div>
                  </v-expand-transition>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>

        <v-divider class="my-3"></v-divider>
        <v-banner
            lines="three"
            class="my-4"
            style="border-style: none;"
        >
          <div class="text-h6">이메일 수신 동의</div>
          <v-banner-text class="text-grey">
            DOKKY에서 주최하는 다양한 이벤트, 정보성 뉴스레터 및 광고 수신여부를 설정할 수 있습니다.
          </v-banner-text>
        </v-banner>

        <v-banner
            lines="three"
            class="my-4"
        >
          <div class="text-h6">뉴스레터 및 마케팅 메일 수신</div>
          <v-banner-text class="text-grey">
            유저가 만드는 다양한 컨텐츠를 뉴스레터로 받습니다.
          </v-banner-text>
          <template v-slot:actions>
            <v-switch
                hide-details
                color="secondary"
            ></v-switch>
          </template>
        </v-banner>
        <div class="d-flex justify-end">
          <v-btn variant="flat" color="info" @click="submitBtn">저장</v-btn>
        </div>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  name: "profile",
  // setup() {
  //   const tags = [
  //     '귀찮아도',
  //     '해야하는',
  //     '오키도키',
  //     '^____^'
  //   ];
  //
  //   const tag = [
  //     {
  //       name: 'backend',
  //       code: '0001'
  //     },
  //     {
  //       name: 'frontend',
  //       code: '0002'
  //     },
  //     {
  //       name: 'java',
  //       code: '0003'
  //     },
  //     {
  //       name: 'typescript',
  //       code: '0004'
  //     },
  //   ];
  //
  //   return {
  //     autoUpdate: true,
  //     tags,
  //     tag,
  //   }
  // },
  data(){
    return {
      autoUpdate: true,
      tags: ['귀찮아도', '해야하는', '오키도키', '^____^'],
      tag: [
        { name: 'backend', code: '0001'},
        { name: 'frontend', code: '0002'},
        { name: 'java', code: '0003'},
        { name: 'typescript', code: '0004'},
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }
  },
  methods: {
    modifyImg() {
      alert("이미지 변경");
    },
    submitBtn() {
      alert("저장");
    }
  }
}
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>