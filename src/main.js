import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import dayjs from 'dayjs';

createApp(App).use(router).use(dayjs).mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
