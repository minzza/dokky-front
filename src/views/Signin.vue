<template>
  <v-label class="d-flex justify-center mb-16 mt-16"
    >DOKKY에 오신것을 환영합니다.</v-label
  >

  <v-label class="d-flex justify-center mb-16 mt-16">
    DOKKY 아이디로 로그인
  </v-label>

  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="15"
      :error-messages="name.errorMessage.value"
      label="아이디"
      variant="outlined"
    ></v-text-field>

    <v-text-field
      v-model="name.value.value"
      :counter="15"
      :error-messages="name.errorMessage.value"
      label="비밀번호"
      variant="outlined"
    ></v-text-field>

    <div class="d-flex justify-end mb-6">
      <router-link to="/forgot">계정 찾기</router-link>
    </div>

    <v-btn class="mx-auto" type="submit" width="450"> 로그인 </v-btn>

    <div class="d-flex justify-center mb-6 ma-5">
      아직 회원이 아니신가요? &nbsp;
      <router-link to="/signup">회원가입</router-link>
    </div>
  </form>
</template>

<script>
import { useField, useForm } from 'vee-validate';
export default {
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true;
          return 'Name needs to be at least 2 characters.';
        },
      },
    });
    const name = useField('name');
    return { name };
  },
};
</script>

<style scoped></style>
