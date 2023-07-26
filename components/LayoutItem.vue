<script setup lang="ts">
import { LayoutItems } from "types";
import Seat from "types/Seat";
const { findSeat } = UseSeats();

const props = defineProps<{
  seat: Seat;
  modelValue: Seat;
}>();
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="layoutItem-container">
    <!--  <DragHandle class="pr-2" /> -->

    <component
      width="40"
      :is="findSeat(props.seat)"
      :class="{ selected: modelValue === props.seat }"
      @click="
        $emit(
          'update:modelValue',
          props.seat === modelValue ? null : props.seat
        )
      "
    ></component>
  </div>
</template>
<style>
.layoutItem-container {
  @apply grid  gap-4;
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
