<template>
  <v-label class="d-flex justify-center mb-16 mt-16"
    >DOKKY에 오신것을 환영합니다.</v-label
  >

  <v-label class="d-flex justify-center mb-16 mt-16">
    회원가입에 필요한 기본정보를 입력해주세요.
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

    <v-text-field
      v-model="name.value.value"
      :counter="15"
      :error-messages="name.errorMessage.value"
      label="이메일"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      v-model="name.value.value"
      :counter="15"
      :error-messages="name.errorMessage.value"
      label="실명"
      variant="outlined"
    ></v-text-field>
    <v-text-field
      v-model="name.value.value"
      :counter="15"
      :error-messages="name.errorMessage.value"
      label="닉네임"
      variant="outlined"
    ></v-text-field>

    <v-btn class="mx-auto" type="submit" width="450"> 회원가입 </v-btn>

    <div class="d-flex justify-center mb-6 ma-5">
      이미 회원이신가요? &nbsp;
      <router-link to="/signin">로그인</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
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
