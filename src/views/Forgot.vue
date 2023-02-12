<template>
  <v-label class="d-flex justify-center mb-5 mt-16 text-h4">계정찾기</v-label>
  <v-span class="d-flex justify-center mb-5">
    회원 가입시 입력하신 이메일 주소를 입력하시면,<br />해당 이메일로 아이디 및
    비밀번호 변경 링크를 보내드립니다.
  </v-span>

  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="15"
      :error-messages="name.errorMessage.value"
      label="아이디"
      variant="outlined"
    ></v-text-field>

    <div class="d-flex justify-space-between">
      <v-btn class="mx-auto" width="220"> 취소 </v-btn>
      <v-btn class="mx-auto" width="220" color="blue"> 계정찾기 </v-btn>
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
