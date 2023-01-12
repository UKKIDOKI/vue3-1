<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }" classCss="col-4">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import AppGrid from '@/components/AppGrid.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';

const router = useRouter();

const goAboutPage = () => {
  router.push({
    name: 'about',
  });
};
const items = ref(['사과', '배', '귤', '파인애플']);
</script>

<style lang="scss" scoped></style>
