import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetaillView from '@/views/posts/PostDetaillView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },

  // posts 동적파라미터
  {
    path: '/posts',
    name: 'Posts',
    component: PostListView,
  },
  {
    path: '/posts/create',
    name: 'PostsCreate',
    component: PostCreateView,
  },
  {
    path: '/posts/:id',
    name: 'PostsDetaill',
    component: PostDetaillView,
  },
  {
    path: '/posts/:id/edit',
    name: 'PostsEdit',
    component: PostEditView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
