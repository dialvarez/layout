<script lang="ts" setup>
const { seats } = UseSeats();
//defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
defineProps(["modelValue"]);
</script>
<template>
  <div class="seat-container">
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
.seat-container {
  @apply grid grid-cols-5 gap-4 bg-red-500;
}
.seat-container svg {
  transition: 0.2s ease all;
  @apply cursor-pointer;
}
.seat-container svg.selected,
.seat-container svg.selected {
  @apply ring-1 ring-black rounded-3xl;
  @apply bg-gray-500;
}
.seat-container svg:hover {
  transform: scale(1.3);
}
</style>
