<script setup lang="ts">
import { LayoutItems } from "types";

defineProps<{
  layoutItems: LayoutItems;
}>();
const r = ref(1);
</script>
<template>
  <div
    :title="layoutItems.createdAt.toLocaleString()"
    class="layoutItem bg-white p-2 mb-2 rounded shadow-sm max-w-[200px] flex"
  >
  <DragHandle class="pr-2" />
    <span> {{ layoutItems.row }} {{ layoutItems.col }} </span>
  </div>
</template>
<style scoped>
  /* .sortable-chosen {
    background: green;
  }
  .sortable-drag {
    background: red;
  }
  .sortable-ghost {
    background: blue;
  } */
  .sortable-drag .layoutItem {
    transform: rotate(5deg);
  }
  .sortable-ghost .layoutItem {
    position: relative;
  }
  .sortable-ghost .layoutItem::after {
    content: "";
    @apply absolute top-0 bottom-0 left-0 right-0 bg-slate-300 rounded;
  }
</style>
