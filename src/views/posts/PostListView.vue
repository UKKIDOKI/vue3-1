<template>
  <div>
    <h2>게시글 목록</h2>
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control" />
        </div>
        <div class="col-3">
          <select class="form-select" v-model="params._limit">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
      </div>
    </form>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post)"
        ></PostItem>
      </div>
    </div>
    <AppPagination :page="params._page" :pageCount="pageCount"></AppPagination>
    <hr class="my-5" />
    <AppCard>
      <PostsDetaill :id="'1'"></PostsDetaill>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostsDetaill from '@/views/posts/PostDetaillView.vue';
import { getPosts } from '@/api/posts';
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import AppCard from '@/components/AppCard.vue';
import AppPagination from '@/components/AppPagination.vue';

const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _limit: '3',
  _page: 1,
  title_like: '',
});

const changePage = page => {
  params.value._page = page;
};

const prevPage = () => {
  if (params.value._page === 1) {
    alert('첫번째 페이지입니다');
  } else {
    params.value._page = --params.value._page;
  }
};

const nextPage = () => {
  if (params.value._page < pageCount.value) {
    params.value._page = ++params.value._page;
  } else {
    alert('마지막 페이지입니다');
  }
};
//paging
const totalCount = ref(0);
const pageCount = computed(() =>
  Math.ceil(totalCount.value / params.value._limit),
);

const router = useRouter();

const posts = ref([]);

// const fetchPosts = () => {
//   posts.value = getData();
// };
const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    posts.value = data;
    totalCount.value = headers['x-total-count'];
  } catch (e) {
    console.log(e);
  }
};

// fetchPosts();\
// 해당 콜백함수안의 반응형데이터가 변경되면 추적하여
watchEffect(fetchPosts);

const goPage = post => {
  // const obj = id;
  router.push({
    name: 'PostsDetaill',
    params: {
      id: post.id,
      title: 'post.title',
      createdAt: 'post.createdAt',
    },
  });
};
</script>

<style lang="scss" scoped></style>
