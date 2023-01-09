<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent="edit">
      <div class="mb-3">
        <label for="titie" class="form-label">제목</label>
        <input
          v-model="form.title"
          type="text"
          class="form-control"
          id="titie"
        />
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea
          v-model="form.content"
          class="form-control"
          id="content"
          rows="3"
        ></textarea>
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
import { getPostById, updataPost } from '@/api/posts';
import dayjs from 'dayjs';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
console.log('1111111111111111111111', route.params.id);
const id = route.params.id;

const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id);
    setForm(data);
  } catch (error) {
    console.log(error);
  }
};

const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};
fetchPost();

const goDetaillPage = () => {
  router.push({
    name: 'PostsDetaill',
    params: id,
  });
};

const edit = async () => {
  try {
    const today = dayjs().format('YYYY-MM-DD');
    const value = {
      title: form.value.title,
      content: form.value.content,
      createdAt: today,
    };
    await updataPost(id, value);
    router.push({
      name: 'PostsDetaill',
      params: { id },
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
