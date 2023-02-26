<template>
  <v-sheet>
    <div class="pa-6">
      <div class="text-h5">{{ title }}</div>
      <div class="text-body-2 text-grey">
        <strong>{{ name }}</strong>님 지식공유 플랫폼 DOKKY에서 다양한 사람을 만나고 생각의 폭을 넓혀보세요.
      </div>
    </div>

    <v-form ref="form">
      <v-container>
        <v-select :items="topics"
                  label="토픽"
                  variant="outlined"
        ></v-select>

        <v-text-field label="제목"
                      variant="outlined"
        ></v-text-field>

        <v-autocomplete
            v-model="tags"
            :items="tag"
            closable-chips
            color="blue-grey-lighten-2"
            item-title="name"
            item-value="code"
            variant="outlined"
            label="태그 - 내용을 대표하는 태그 3개 정도 입력해주세요."
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

        <Editor/>

        <div class="d-flex justify-end" style="gap:1rem">
          <v-btn variant="outlined" @click="cancelBtn">취소</v-btn>
          <v-btn variant="flat" color="info" @click="submitBtn">등록</v-btn>
        </div>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script>
import Editor from "@/views/board/Editor.vue";
export default {
  name: 'New',
  components: {Editor},
  props: {
    title: String
  },
  data(){
    return {
      name: '솔솔',
      autoUpdate: true,
      tags: ['귀찮아도', '해야하는', '오키도키', '^____^'],
      tag: [
        { name: 'backend', code: '0001'},
        { name: 'frontend', code: '0002'},
        { name: 'java', code: '0003'},
        { name: 'typescript', code: '0004'},
      ],
      topics: [
        '사는 얘기',
        '모임&스터디'
      ]
    }
  },
  methods: {
    cancelBtn(){
      alert("작성을 취소하시겠습니까?");
      this.$refs.form.reset();

    },
    submitBtn(){
      alert("아직 등록은 기다리세욤");
    }
  },
};
</script>
