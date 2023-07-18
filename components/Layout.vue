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
        col: 1,
        row: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 1,
        row: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 1,
        row: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 1,
        row: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 1,
        row: 5,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 2,
        row: 1,
        createdAt: new Date(),
      },
    ],
  },
  {
    id: nanoid(),
    name: "Planta Alta",
    cols: 5,
    rows: 5,
    layoutItems: [
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 1,
        row: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 1,
        row: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 1,
        row: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 1,
        row: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 1,
        row: 5,
        createdAt: new Date(),
      },
      {
        id: nanoid(),
        kinde: Kinde.seat,
        col: 2,
        row: 1,
        createdAt: new Date(),
      },
    ],
  },
]);
</script>
<template>
  <div class="flex gap-4 overflow-x-auto items-start">
    <div
      v-for="layout in layouts"
      :key="layout.id"
      class="column bg-gray-200 p-5 rounded min-w-[250px] items-start"
    >
      <header class="font-bold mb-4">
        {{ layout.name }}
      </header>
      <LayoutItem
        v-for="layoutItems in layout.layoutItems"
        :key="layoutItems.id"
        :layoutItems="layoutItems"
      />
      <footer>
        <button class="text-gray-500">+ Add a Card</button>
      </footer>
    </div>
  </div>
</template>
