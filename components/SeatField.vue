<script lang="ts" setup>
const { seats } = UseSeats();
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="emoji-container">
    <component
      v-for="seat in seats"
      :is="seat.component"
      :key="seat.name"
      :class="{ selected: modelValue === seat.name }"
      @click="
        $emit('update:modelValue', seat.name === modelValue ? null : seat.name)
      "
    ></component>
  </div>
</template>
<style>
.emoji-container {
  @apply flex mb-5;
}
.emoji-container svg {
  transition: 0.2s ease all;
  @apply w-8 mr-2 cursor-pointer;
}
.emoji-container svg.selected,
.emoji-container svg.selected path {
  @apply fill-white dark:fill-white rounded-3xl;
  @apply bg-teal-700 dark:bg-teal-700;
}
.emoji-container svg:hover {
  transform: scale(1.1);
}
</style>
