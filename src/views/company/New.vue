<template>
  <v-sheet>
    <div class="pa-6">
      <div class="text-h5">{{ title }}</div>
    </div>
    <v-card variant="outlined" class="pa-5">
      <div class="text-caption">
        <font-awesome-icon icon="fa-circle-exclamation"></font-awesome-icon>
        <strong> 회사등록 절차 안내</strong>
      </div>
      <div class="text-caption">
        <strong>DOKKY에 가임한 개인 회원 계정 중</strong>
        회사 정보 등록 및 인증을 받은 <strong>회사 관리자</strong> 회원만 구인
        게시판에 등록이 가능하며 별도의 인증 절차가 필요하오니 구인 게시판을
        이용하실 기업 회원분들은 사전에 등록 및 인증을 받으시기를 바랍니다.
        <br /><br />
        구인 게시판을 이용하시는 모든 회원분들께 보다 많은 혜택과 서비스를
        제공하기 위함이니 적극적으로 협조해 주시면 고맙겠습니다.
        <br /><br />
        항목은 필수 입력 입니다.
        <br />
        <strong>
          온라인 일자인 중개 서비스를 운영 중인 회사에 대해서는 신규인증이
          불가하며 기존 인증 회사 또한 인증 취소 처리 됩니다. (2021.10.1일 차단
          조치)
          <br />
          기존에 온라인 일자리 중개 서비스 운영 회사 계정으로 작성된 게시물과
          외부 플랫폼으로 유도하는 구인 글은 비공개 또는 삭제 처리되며 이후
          작성되는 구인글 또한 온라인 일자리 중개 서비스 링크가 포함될 수
          없습니다. (2021.10.1 ~ 8일 까지 조치)
        </strong>
      </div>
    </v-card>

    <v-container>
      <v-form ref="form">
        <v-row class="pa-4" align="center" justify="center">
          <v-col>
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                max-width="150"
                :class="{ 'on-hover': isHovering }"
                v-bind="props"
                @click="companyLogoBtn"
              >
                <div style="width: 150px; height: 150px">
                  <v-img
                    :src="companyLogo"
                    :width="150"
                    :height="150"
                    aspect-ratio="1/1"
                    cover
                  >
                    <div v-if="!companyLogo">
                      <v-card-text class="d-flex justify-center"
                        >회사로고 등록</v-card-text
                      >
                      <v-card-text class="justify-center text-caption text-grey"
                        >bmp, jpg, jpeg, png, webp 포맷 <br />
                        256x256 사이즈</v-card-text
                      >
                    </div>
                  </v-img>
                  <v-expand-transition>
                    <div
                      v-if="isHovering"
                      class="d-flex transition-fast-in-fast-out bg-grey-darken-1 v-card--reveal text-h2"
                      style="height: 100%"
                    >
                      <v-card-text class="d-flex justify-center"
                        >로고 변경</v-card-text
                      >
                    </div>
                  </v-expand-transition>

                  <v-file-input
                    id="companyLogoUpload"
                    accept="image/bmp, image/jpg, image/jpeg, image/png, image/webp"
                    :show-size="1000"
                    class="hidden"
                    :multiple="false"
                    @change="changeFile"
                  ></v-file-input>
                </div>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field label="회사명" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="사업자등록번호"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field label="대표 연락처" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field label="대표 이메일" variant="outlined"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-file-input
              counter
              label="사업자등록증"
              placeholder="Select your files"
              variant="outlined"
              :show-size="1000"
            >
            </v-file-input>
          </v-col>
          <v-col cols="6"> </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card-text class="font-weight-bold">담당자 정보</v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field label="담당자명" variant="outlined"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="담당자 연락처"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="담당자 이메일"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="6"> </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card-text class="font-weight-bold">추가 회사정보</v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-select
              :items="selectMemberCnt"
              item-title="name"
              item-value="value"
              label="직원수"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <v-text-field
              label="회사 홈페이지"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-card-text class="font-weight-bold">회사소개</v-card-text>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <Editor />
          </v-col>
        </v-row>
        <v-row class="pt-8">
          <v-col cols="12">
            <div class="d-flex justify-end">
              <v-btn variant="flat" color="info" @click="submitBtn">저장</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </v-sheet>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Editor from '@/views/board/Editor.vue';

export default {
  components: { Editor, FontAwesomeIcon },
  props: {
    title: String,
  },
  setup: function () {
    function companyLogoBtn() {
      let fileUpload = document.getElementById('companyLogoUpload');
      if (fileUpload != null) {
        fileUpload.click();
      }
    }
    function changeFile(file) {
      const data = file.target;
      if (data.files && data.files[0]) {
        const file = data.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          this.companyLogo = e.target.result;
        };
      }
    }

    const selectMemberCnt = [
      { name: '직원수를 선택해주세요.', value: '' },
      { name: '5명 미만', value: '5' },
      { name: '5 ~ 9명', value: '10' },
      { name: '10 ~ 19명', value: '20' },
      { name: '20 ~ 29명', value: '30' },
      { name: '30 ~ 39명', value: '40' },
      { name: '40 ~ 49명', value: '50' },
      { name: '50 ~ 99명', value: '100' },
      { name: '100 ~ 199명', value: '200' },
      { name: '200명 이상', value: '999' },
    ];

    const submitBtn = () => {
      alert('저장');
    };

    return {
      companyLogo: '',
      companyLogoBtn,
      changeFile,
      selectMemberCnt,
      submitBtn,
    };
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}

.hidden {
  display: none;
}
</style>
