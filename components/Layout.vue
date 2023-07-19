<script setup lang="ts">
  import { nanoid } from "nanoid";
  import draggable from "vuedraggable";
  import { Layout, LayoutItems } from "types";
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
    {
      id: nanoid(),
      name: "Planta Baja",
      cols: 4,
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
          row: 2,
          col: 4,
          createdAt: new Date(),
        },
      ],
    },
  ]);
  const dragging = ref(false);
  const draggingInfo = computed(() => dragging.value ? "under drag" : "");
  function log(evt) {
      window.console.log(evt);
    }
  const alt = useKeyModifier("Alt");
</script>
<template>
  <div class="flex gap-5 overflow-x-auto items-start">
    <div
      v-for="layout in layouts"
      :key="layout.id"
      class="layout bg-gray-200 p-5 rounded min-w-[250px] items-start"
    >
    <h3>Draggable {{ draggingInfo }}</h3>
      <header class="font-bold mb-4">
        {{ layout.name }}
      </header>
    
        <draggable
          v-model="layout.layoutItems"
          :group="{ name: 'layoutItems', put: alt ? true : false}"
          :animation="150"
          item-key="id"
          @start="dragging = true"
          @end="dragging = false"
          @change="log"
          handle=".drag-handle"
          class="grid grid-cols-4 gap-2"
          :class="layout.cols===5 ? 'grid-cols-4' : 'grid-cols-3'"
        >
          <template #item="{ element: layoutItems }: { element: LayoutItems }">
            <div>
              <LayoutItem :layoutItems="layoutItems" />
            </div>
          </template>
        </draggable>
      
      <footer>
        <button class="text-gray-500">+ Add a Card</button>
      </footer>
    </div>
  </div>
</template>
