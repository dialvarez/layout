<script setup lang="ts">
import { LayoutItems } from "types";
const { findSeat } = UseSeats();
defineProps<{
  layoutItems: LayoutItems;
}>();
</script>
<template>
  <div class="layoutItem">
    <!--  <DragHandle class="pr-2" /> -->

    <component
      width="50"
      :is="findSeat(layoutItems.seat)"
      class="drag-handle cursor-move"
    ></component>
  </div>
</template>
<style>
.sortable-chosen .layoutItem {
  background: green;
}
.sortable-drag .layoutItem {
  background: red;
}
/* .sortable-ghost .layoutItem {
  background: blue;
}
.sortable-drag .layoutItem {
  transform: rotate(5deg);
}
.sortable-ghost .layoutItem {
  position: relative;
} */
/* .sortable-ghost .layoutItem::after {
  content: "";
  @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
} */
</style>
