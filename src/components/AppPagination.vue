<template>
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="isPrevPage">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="prevPage"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="page in pageCount"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{
          page
        }}</a>
      </li>
      <li class="page-item" :class="isNextPage">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="nextPage"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
});

const data = {
  page: props.currentPage,
  pageCount: props.pageCount,
};
const emits = defineEmits(['page']);

const changePage = page => {
  data.page = page;
  emits('page', data.page);
};

const prevPage = () => {
  if (props.currentPage === 1) {
    alert('첫번째 페이지입니다');
  } else {
    data.page = --data.page;
    emits('page', data.page);
  }
};

const nextPage = () => {
  if (props.currentPage < props.pageCount) {
    data.page = ++data.page;
    emits('page', data.page);
  } else {
    alert('마지막 페이지입니다');
  }
};
const isPrevPage = computed(() => ({ disabled: props.currentPage === 1 }));
const isNextPage = computed(() => ({
  disabled: props.currentPage >= props.pageCount,
}));
</script>

<style lang="scss" scoped></style>

() => { const log return log } () =>
