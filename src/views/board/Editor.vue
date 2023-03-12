<template>
  <QuillEditor />
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  components: {
    QuillEditor,
  },
  setup() {
    const options = {
      debug: 'info',
      modules: {
        toolbar: ['bold', 'italic', 'underline'],
      },
      placeholder: '내용을 입력하세요!',
      readOnly: true,
      theme: 'snow',
    };

    return {
      options,
    };
  },
};
</script>

<style>
.ql-container {
  min-height: 15rem;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

/*.ql-editor {*/
/*  height: 100%;*/
/*  flex: 1;*/
/*  overflow-y: auto;*/
/*  width: 100%;*/
/*}*/
</style>
