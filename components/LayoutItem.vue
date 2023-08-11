<script setup lang="ts">
import { nanoid } from "nanoid";
import { LayoutItems } from "types";
import Seat from "types/Seat";
const { findSeat } = UseSeats();

defineProps<{
  layoutItems: LayoutItems[];
  modelValue: LayoutItems | null;
}>();
defineEmits(["update:modelValue"]);

const control = useKeyModifier("Control");
</script>
<template>
  <div class="layoutItem-container">
    <!--  <DragHandle class="pr-2" /> -->

    <component
      v-for="layoutItem in layoutItems"
      :width="30"
      :height="30"
      :is="findSeat(layoutItem.seat)"
      :key="layoutItem.id"
      :class="{ selected: modelValue === layoutItem }"
      @click="
        $emit(
          'update:modelValue',
          layoutItem === modelValue ? null : layoutItem
        )
        /*  control
          ? $emit(
              'update:modelValue',
              layoutItem === modelValue ? null : layoutItem
            )
          : null */
      "
    ></component>
  </div>
</template>
<style scoped>
.layoutItem-container {
  @apply grid  gap-4 p-3;
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
