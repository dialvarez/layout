<script setup lang="ts">
import { LayoutItems } from "types";
import Seat from "types/Seat";
const { findSeat } = UseSeats();

const props = defineProps<{
  param: Seat;
  modelValue: Seat;
}>();
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="layoutItem-container">
    <!--  <DragHandle class="pr-2" /> -->

    <component
      width="40"
      :is="findSeat(props.param)"
      :class="{ selected: modelValue === props.param }"
      @click="
        $emit(
          'update:modelValue',
          props.param === modelValue ? null : props.param
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
  @apply ring-2 ring-gray-700 rounded-3xl;
}
.layoutItem-container svg:hover {
  transform: scale(1.3);
}
</style>
