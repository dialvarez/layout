<script setup lang="ts">
import { LayoutItems } from "types";
import Seat from "types/Seat";
const { findSeat } = UseSeats();

defineProps<{
  params: LayoutItems[];
}>();
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="layoutItem-container">
    <!--  <DragHandle class="pr-2" /> -->

    <component
      v-for="param in params"
      :key="param.id"
      width="40"
      :is="findSeat(param.seat)"
    ></component>
  </div>
</template>
<style>
.layoutItem-container {
  @apply grid grid-cols-5 gap-2;
}
.layoutItem-container svg {
  transition: 0.2s ease all;
  @apply cursor-pointer;
}
.layoutItem-container svg.selected,
.layoutItem-container svg.selected path {
  @apply ring-gray-700 rounded-3xl p-1;
  @apply bg-stone-300;
}
.layoutItem-container svg:hover {
  transform: scale(1.3);
}
</style>
