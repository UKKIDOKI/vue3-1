import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetaillView from '@/views/posts/PostDetaillView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  // {
  //   name: 'home',
  //   path: '/home',
  //   component: HomeView,
  // },
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
    props: true,
    name: 'PostsDetaill',
    component: PostDetaillView,
  },
  {
    path: '/posts/:id/edit',
    name: 'PostsEdit',
    component: PostEditView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
