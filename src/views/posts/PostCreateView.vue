<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      v-model:title="form.title"
      v-model:content="form.content"
      @submit.prevent="save(form.title, form.content)"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goPostList"
        >
          목록
        </button>
        <button class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import dayjs from 'dayjs';
import PostForm from '@/components/posts/PostForm.vue';
import { ref } from 'vue';

const router = useRouter();

const form = ref({
  title: null,
  content: null,
});

const goPostList = () => {
  router.push({
    name: 'Posts',
  });
};

const save = async () => {
  try {
    const createdAt = dayjs().format('YYYY-MM-DD');
    await createPost({
      title: form.value.title,
      content: form.value.content,
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
