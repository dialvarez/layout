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
  @apply grid grid-cols-3 gap-4;
}
.emoji-container svg {
  transition: 0.2s ease all;
  @apply  cursor-pointer;
}
.emoji-container svg.selected,
.emoji-container svg.selected path {
  @apply ring-2 ring-gray-700 rounded-3xl p-1;
  @apply bg-gray-200 ;
}
.emoji-container svg:hover {
  transform: scale(1.3);
}
</style>
