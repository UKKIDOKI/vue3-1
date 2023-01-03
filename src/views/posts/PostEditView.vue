<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div class="mb-3">
        <label for="titie" class="form-label">제목</label>
        <input type="text" class="form-control" id="titie" />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea class="form-control" id="content" rows="3"></textarea>
      </div>
      <div class="pt-4">
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetaillPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
console.log('1111111111111111111111', route.params.id);
const id = route.params.id;

const goDetaillPage = () => {
  router.push({
    name: 'PostsDetaill',
    params: id,
  });
};
</script>

<style lang="scss" scoped></style>
