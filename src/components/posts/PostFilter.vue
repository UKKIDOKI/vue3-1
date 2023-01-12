<template>
  <form @submit.prevent>
    <div class="row g-3">
      <div class="col">
        <input
          :value="like"
          @input="$emit('update:like', $event.target.value)"
          type="text"
          class="form-control"
        />
      </div>
      <div class="col-3">
        <select
          class="form-select"
          :value="limit"
          @input="$emit('update:limit', $event.target.value)"
        >
          <option value="3">3개씩 보기</option>
          <option value="6">6개씩 보기</option>
          <option value="9">9개씩 보기</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script setup>
defineProps({
  like: {
    type: [Number, String],
  },
  limit: {
    type: [Number, String],
  },
});
// defineEmits(['like']);
defineEmits(['update:like', 'update:limit']);
</script>

<style lang="scss" scoped></style>
