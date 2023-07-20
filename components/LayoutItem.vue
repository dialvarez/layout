<script setup lang="ts">

import { LayoutItems } from "types";
const { findSeat } = UseSeats();
defineProps<{
  layoutItems: LayoutItems;
}>();
</script>
<template>
     

  <div
    :title="layoutItems.createdAt.toLocaleString()"
    class="layoutItem bg-white p-2 mb-2 rounded shadow-sm max-w-[100px] flex"
  >
    <DragHandle class="pr-2" />

    <article class="flex items-start space-x-2 p-1">
      <div class="text-sm">
    
        <dl class="flex flex-wrap text-xs leading-3 font-normal">
          <div class="flex-none w-full mt-2 font-normal">
            <dt class="sr-only">Cast</dt>
            <dd class="text-slate-400">{{ layoutItems.id }}</dd>
          </div>
          <div class="flex-none w-full mt-2 font-normal">
            <dt class="sr-only">Cast</dt>
            <dd class="text-slate-400">{{ layoutItems.seat }}</dd>
          </div>
          <div class="flex-none w-full mt-2 font-normal">
            <dt class="sr-only">Cast</dt>
            <dd class="text-slate-400">{{ layoutItems.createdAt.getFullYear() }}</dd>
          </div>
        </dl>
      </div>
    </article>
  </div>
</template>
<style>
.sortable-chosen .layoutItem {
  background: green;
}
.sortable-drag .layoutItem {
  background: red;
}
.sortable-ghost .layoutItem {
  background: blue;
}
.sortable-drag .layoutItem {
  transform: rotate(5deg);
}
.sortable-ghost .layoutItem {
  position: relative;
}
/* .sortable-ghost .layoutItem::after {
  content: "";
  @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
} */
</style>
