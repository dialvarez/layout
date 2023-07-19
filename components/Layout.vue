<script setup lang="ts">
import { nanoid } from "nanoid";
import { Layout } from "types";
import { Kinde } from "../types/emun";

const layouts = ref<Layout[]>([
  {
    id: nanoid(),
    name: "Planta Alta",
    cols: 5,
    rows: 5,
    layoutItems: [
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
    ],
  },
  {
    id: nanoid(),
    name: "Planta Baja",
    cols: 5,
    rows: 5,
    layoutItems: [
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 3,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 3,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 1,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 3,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 3,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
    ],
  },
]);
</script>
<template>
  <div class="flex gap-5 overflow-x-auto items-start">
    <div
      v-for="layout in layouts"
      :key="layout.id"
      class="column bg-gray-200 p-5 rounded min-w-[250px] items-start"
    >
      <header class="font-bold mb-4">
        {{ layout.name }}
      </header>
      <div class="grid grid-cols-4 gap-2">
        <LayoutItem
          v-for="layoutItems in layout.layoutItems"
          :key="layoutItems.id"
          :layoutItems="layoutItems"
        />
      </div>
      <footer>
        <button class="text-gray-500">+ Add a Card</button>
      </footer>
    </div>
  </div>
</template>
