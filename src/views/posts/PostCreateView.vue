<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent="save(title, content)">
      <div class="mb-3">
        <label for="titie" class="form-label">제목</label>
        <input type="text" class="form-control" id="titie" v-model="title" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea
          class="form-control"
          id="content"
          rows="3"
          v-model="content"
        ></textarea>
      </div>
      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goPostList"
        >
          목록
        </button>
        <button class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import dayjs from 'dayjs';

const router = useRouter();

const goPostList = () => {
  router.push({
    name: 'Posts',
  });
};

const save = async (title, content) => {
  console.log(title, content);
  try {
    const createdAt = dayjs().format('YYYY-MM-DD');
    await createPost({
      title,
      content,
      createdAt,
    });
    router.push({
      name: 'Posts',
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
