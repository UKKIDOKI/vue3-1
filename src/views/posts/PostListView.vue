<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getData } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

console.log(getData());
const router = useRouter();

const posts = ref([]);

// const fetchPosts = () => {
//   posts.value = getData();
// };
const fetchPosts = () => {
  getData()
    .then(res => {
      posts.value = res.data;
      console.log('111', posts.value);
    })
    .then(err => {
      console.log(err);
    });
};

fetchPosts();

const goPage = id => {
  router.push({
    name: 'PostsDetaill',
    params: {
      id,
    },
  });
};
</script>

<style lang="scss" scoped></style>
