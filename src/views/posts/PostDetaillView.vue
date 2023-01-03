<template>
  <div>
    <h2>{{}}</h2>
    <p>{{}}</p>
    <p class="text-muted">2023-01-01</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const posts = ref([]);

const goListPage = () => {
  router.push({
    name: 'Posts',
  });
};
const goEditPage = () => {
  router.push({
    name: 'PostsEdit',
    params: id,
  });
};
</script>

<style lang="scss" scoped></style>
