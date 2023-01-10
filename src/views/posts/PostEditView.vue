<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetaillPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { getPostById, updataPost } from '@/api/posts';
import dayjs from 'dayjs';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';

const router = useRouter();
const route = useRoute();
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
