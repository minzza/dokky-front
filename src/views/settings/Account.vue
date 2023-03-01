<template>
  <v-sheet>
    <v-form ref="form">
      <v-container>
        <div class="pa-3">
          <div class="text-h6">이메일 정보</div>
        </div>
        <v-row>
          <v-col cols="9">
            <v-text-field variant="outlined"
                          model-value="thf147@naver.com"
            ></v-text-field>
          </v-col>
          <v-col align-self="center">
            <v-btn variant="outlined">
              <font-awesome-icon icon="fa-envelope"/>
              이메일 인증
            </v-btn>
          </v-col>
        </v-row>

        <v-divider class="my-3"></v-divider>
        <div class="pa-3">
          <div class="text-h6">계정삭제</div>
          <v-card variant="outlined" class="pa-5">
            <div class="text-caption text-grey">
              회원 탈퇴일로부터 계정과 닉네임을 포함한 계정 정보(아이디/이메일/닉네임)는 <br>
              <a class="font-weight-bold text-blue text-decoration-underline">개인정보 보호방침</a>에 따라 <strong>60일간 보관(잠김)</strong>되며,
              60일 경과된 후에는 모든 개인 정보는 완전히 삭제되며 더 이상 복구할 수 없게 됩니다.<br>
              <br>
              작성된 게시물은 삭제되지 않으며, 익명처리 후 DOKKY 로 소유권이 귀속됩니다.
            </div>
          </v-card>
          <v-row>
            <v-col cols="9">
              <v-checkbox label="계정 삭제에 관한 정책을 읽고 이에 동의합니다."></v-checkbox>
            </v-col>
            <v-col align-self="center">
              <v-btn
                  variant="flat"
                  color="error"
              >
                <font-awesome-icon icon="fa-user-minus"/>
                <span class="font-medium ml-1">회원탈퇴</span>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: "account",
  components: {FontAwesomeIcon}
}
</script>

<style scoped>

</style>