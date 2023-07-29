<script lang="ts" setup>
import { LayoutItems } from "types";
import Seat from "types/Seat";
const { findSeat } = UseSeats();
//defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
defineProps<{
  layoutItems: LayoutItems[];
  modelValue: Seat | null;
}>();
</script>
<template>
  <div class="seat-container">
    <component
      v-for="item in layoutItems"
      :key="item.id"
      :is="findSeat(item.seat)"
      :class="{ selected: modelValue === item.seat }"
      @click="
        $emit('update:modelValue', item.seat === modelValue ? null : item.seat)
      "
    ></component>
  </div>
</template>
<style>
.seat-container {
  @apply grid grid-cols-5 gap-4 bg-orange-300;
}
.seat-container svg {
  transition: 0.2s ease all;
  @apply cursor-pointer bg-green-600;
}
.seat-container svg.selected,
.seat-container svg.selected {
  @apply ring-2 ring-black rounded-3xl p-1;
  @apply bg-gray-500;
}
.seat-container svg:hover {
  transform: scale(1.3);
}
</style>
