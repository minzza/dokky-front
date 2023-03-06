<template>
  <v-sheet min-height="70vh" rounded="lg">
    <v-container>
      <v-banner :avatar="mainContents.img" lines="one">
        <v-banner-text>
          {{ mainContents.title }}
        </v-banner-text>

        <v-banner-text>
          <div class="d-inline-flex">
            <div class="d-inline-flex align-center">
              <font-awesome-icon icon="fa-eye" />
              <span class="font-medium ml-1">
                {{ mainContents.activityScore }}
              </span>
              <span class="sr-only">views</span>
            </div>
            <div class="d-inline-flex align-center">
              · {{ mainContents.regDt }} ·
            </div>
            <div class="d-inline-flex align-center">
              <font-awesome-icon icon="fa-regular fa-comment" />
              <span class="font-medium ml-1"> {{ comment.count }} </span>
              <span class="sr-only">comments</span>
            </div>
          </div>
        </v-banner-text>
        <template v-slot:actions>
          <div class="mx-auto text-center">
            <a @click="sharedBtn">
              <font-awesome-icon icon="fa-arrow-up-from-bracket" />
            </a>
          </div>
          <div class="mx-auto text-center pl-4">
            <a @click="bookmarkBtn">
              <font-awesome-icon icon="fa-regular fa-bookmark" />
            </a>
          </div>
        </template>
      </v-banner>
      <v-textarea
        variant="plain"
        no-resize
        rows="10"
        :model-value="mainContents.data"
        readonly
      ></v-textarea>
      <div class="d-flex justify-space-around">
        <v-chip-group mandatory selected-class="text-primary">
          <v-chip v-for="tag in tags" :key="tag"> #{{ tag }} </v-chip>
        </v-chip-group>

        <v-spacer></v-spacer>
        <div class="align-end">
          <v-btn variant="text" @click="likeDecrease">
            <font-awesome-icon icon="fa-chevron-down" />
          </v-btn>
          {{ mainContents.like }}
          <v-btn variant="text" @click="likeIncrement">
            <font-awesome-icon icon="fa-chevron-up" />
          </v-btn>
        </div>
      </div>

      <!--////////////////////////////////////////////////////////////////////-->

      <v-divider class="my-3"></v-divider>
      <p class="pa-2">{{ comment.count }} 개의 댓글</p>
      <v-card class="pa-3">
        <v-banner :avatar="comment.img" lines="one" style="border-style: none">
          <v-textarea
            :model-value="comment.data"
            :readonly="!comment.data"
            :placeholder="
              !comment.data ? '댓글을 쓰려면 이메일 인증이 필요합니다.' : ''
            "
            no-resize
            rows="3"
            variant="outlined"
          ></v-textarea>
        </v-banner>
        <div class="d-flex justify-end">
          <v-btn variant="flat" color="info" @click="writeComment"
            >댓글 쓰기</v-btn
          >
        </div>
      </v-card>

      <div v-for="(item, index) in comment.commentList" :key="index">
        <v-banner :avatar="item.img" lines="three">
          <v-banner-text>
            {{ item.nickName }}
          </v-banner-text>
          <v-banner-text>
            <div class="d-flex">
              <font-awesome-icon icon="fa-eye" />
              <span class="font-medium ml-1"> {{ item.activityScore }} </span>
              <span class="sr-only">views</span>
              ·
              <span class="font-medium ml-1"> {{ item.regDt }} </span>

              <v-spacer></v-spacer>

              <v-btn variant="text" @click="likeDecrease">
                <font-awesome-icon icon="fa-chevron-down" />
              </v-btn>
              {{ mainContents.like }}
              <v-btn variant="text" @click="likeIncrement">
                <font-awesome-icon icon="fa-chevron-up" />
              </v-btn>
            </div>
          </v-banner-text>
          <v-card-text> {{ item.data }} </v-card-text>

          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            v-if="item.childComments.length > 0"
            @click="showComment(index)"
          >
            <font-awesome-icon
              :icon="show ? 'fa-chevron-up' : 'fa-chevron-down'"
              class="pr-2"
            />
            댓글 {{ item.childComments.length }}개 보기
          </v-btn>

          <v-expand-transition>
            <div>
              <v-divider></v-divider>

              <div v-for="(child, idx) in item.childComments" :key="idx">
                <v-banner :avatar="child.img" lines="three">
                  <v-banner-text>
                    {{ child.nickName }}
                  </v-banner-text>
                  <v-banner-text>
                    <div class="d-flex">
                      <font-awesome-icon icon="fa-eye" />
                      <span class="font-medium ml-1">
                        {{ child.activityScore }}
                      </span>
                      <span class="sr-only">views</span>
                      ·
                      <span class="font-medium ml-1"> {{ child.regDt }} </span>

                      <v-spacer></v-spacer>

                      <v-btn variant="text" @click="likeDecrease">
                        <font-awesome-icon icon="fa-chevron-down" />
                      </v-btn>
                      {{ mainContents.like }}
                      <v-btn variant="text" @click="likeIncrement">
                        <font-awesome-icon icon="fa-chevron-up" />
                      </v-btn>
                    </div>
                  </v-banner-text>
                  <v-card-text> {{ child.data }} </v-card-text>
                </v-banner>
              </div>
            </div>
          </v-expand-transition>
        </v-banner>
      </div>
    </v-container>
  </v-sheet>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const tags = ['JAVA', 'Back-end', 'study'];

    let mainContents = reactive({
      title: '가나다라마바사아자차카',
      activityScore: '1.4k',
      regDt: '20분전',
      data: 'aaaaaaaaaa',
      img: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
      like: 3,
    });

    let comment = {
      count: 10,
      data: '',
      img: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
      commentList: [
        {
          nickName: '솔솔',
          activityScore: '123',
          regDt: '3시간전',
          data: '댓글을 달아봅니다',
          like: '1',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          childComments: [
            {
              nickName: '밈두니',
              activityScore: '2.6k',
              regDt: '1시간전',
              data: '대댓1',
              like: '0',
              img: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
            },
            {
              nickName: '밈두니',
              activityScore: '2.6k',
              regDt: '1시간전',
              data: '대댓2',
              like: '0',
              img: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
            },
            {
              nickName: '밈두니',
              activityScore: '2.6k',
              regDt: '1시간전',
              data: '대댓3',
              like: '0',
              img: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
            },
          ],
        },
        {
          nickName: '솔솔1',
          activityScore: '666',
          regDt: '2시간전',
          data: '댓글을 달아봅니다dsdsdads',
          like: '1',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          childComments: [],
        },
        {
          nickName: '솔솔2',
          activityScore: '123',
          regDt: '9시간전',
          data: '댓글을 달아봅니다asdfefbbrbrb',
          like: '1',
          img: 'https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
          childComments: [
            {
              nickName: '밈두니3',
              activityScore: '2.6k',
              regDt: '1시간전',
              data: '댓글달아유',
              like: '0',
              img: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
            },
          ],
        },
      ],
    };

    const sharedBtn = () => {
      alert('공유');
    };

    const bookmarkBtn = () => {
      alert('북마크');
    };
    const writeComment = () => {
      alert('댓글 쓰기');
    };

    function likeIncrement() {
      mainContents.like++;
    }

    function likeDecrease() {
      if (mainContents.like > 0) {
        mainContents.like--;
      }
    }

    const showComment = index => {
      alert('>>> idx : ' + index);
      return !this.show;
    };
    return {
      mainContents,
      tags,
      sharedBtn,
      bookmarkBtn,
      comment,
      writeComment,
      likeIncrement,
      likeDecrease,
      show: false,
      showComment,
    };
  },
};
</script>

<style scoped></style>
