<template>
  <div>
    <h2>게시글 목록</h2>
    <PostFilter
      v-model:like="params.title_like"
      v-model:limit="params._limit"
    ></PostFilter>
    <hr class="my-4" />
    <AppGrid :items="posts" v-slot="{ item }" classCss="col-4">
      <PostItem
        :title="item.title"
        :content="item.content"
        :created-at="item.createdAt"
        @click="goPage(item)"
      ></PostItem>
    </AppGrid>
    <AppPagination
      :currentPage="params._page"
      :pageCount="pageCount"
      @page="page => (params._page = page)"
    ></AppPagination>
    <hr class="my-5" />
    <AppCard>
      <!-- <PostsDetaill :id="'1'"></PostsDetaill> -->
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
// import PostsDetaill from '@/views/posts/PostDetaillView.vue';
import { getPosts } from '@/api/posts';
import { ref, computed, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import AppCard from '@/components/AppCard.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppGrid from '@/components/AppGrid.vue';
import PostFilter from '@/components/posts/PostFilter.vue';

const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _limit: '3',
  _page: 1,
  title_like: '',
});

const con = e => {
  params.value.title_like = e;
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
    // console.dir(params.value);
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
