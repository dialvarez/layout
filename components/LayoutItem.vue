<script setup lang="ts">
import { LayoutItems } from "types";

defineProps<{
  layoutItems: LayoutItems;
}>();
</script>
<template>
  <div class="flex gap-4">
    <div
      :title="layoutItems.createdAt.toLocaleString()"
      class="layoutItems bg-white p-2 mb-2 rounded shadow-sm max-w-[150px]"
    >
      <span>
        {{ layoutItems.kinde }}
      </span>
    </div>
    <div
      :title="layoutItems.createdAt.toLocaleString()"
      class="layoutItems bg-white p-2 mb-2 rounded shadow-sm max-w-[150px]"
    >
      <span>
        {{ layoutItems.kinde }}
      </span>
    </div>
    <div
      :title="layoutItems.createdAt.toLocaleString()"
      class="layoutItems bg-white p-2 mb-2 rounded shadow-sm max-w-[150px]"
    >
      <span>
        {{ layoutItems.kinde }}
      </span>
    </div>
    <div
      :title="layoutItems.createdAt.toLocaleString()"
      class="layoutItems bg-white p-2 mb-2 rounded shadow-sm max-w-[150px]"
    >
      <span>
        {{ layoutItems.kinde }}
      </span>
    </div>
  </div>
</template>
