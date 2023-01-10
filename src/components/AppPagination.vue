<template>
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: props.page === 1 }">
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
        v-for="page in props.pageCount"
        :key="page"
        class="page-item"
        :class="{ active: props.page === page }"
      >
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{
          page
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: props.page >= pageCount }">
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
const props = defineProps({
  page: null,
  pageCount: null,
});
defineEmits(['update:', 'update:content']);
</script>

<style lang="scss" scoped></style>
