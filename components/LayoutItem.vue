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
    class="layoutItems bg-white p-1 mb-2 rounded shadow-sm max-w-[150px]"
  >
    <span> {{ layoutItems.row }} {{ layoutItems.col }} </span>
  </div>
</template>
