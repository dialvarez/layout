<script setup lang="ts">
import { nanoid } from "nanoid";
import draggable from "vuedraggable";
import { Layout, LayoutItems, LayoutSetup } from "types";
import Seat from "types/Seat";
const { findSeat } = UseSeats();
const layoutSetup = ref<LayoutSetup[]>([
  {
    id: nanoid(3),
    seat: "bloked",
  },
  {
    id: nanoid(3),
    seat: "booked",
  },
  {
    id: nanoid(3),
    seat: "free",
  },
  {
    id: nanoid(3),
    seat: "aisle",
  },
  {
    id: nanoid(3),
    seat: "coffe",
  },
  {
    id: nanoid(3),
    seat: "stair",
  },
  {
    id: nanoid(3),
    seat: "selected",
  },
]);

const layouts = ref<Layout[]>([
  {
    id: nanoid(5),
    name: "Planta Alta",
    cols: 6,
    rows: 5,
    layoutItems: [
      {
        id: nanoid(5),
        seat: "free",
        row: 1,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 1,
        col: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 1,
        col: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 1,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 3,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 3,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
    ],
  },
  /*  {
    id: nanoid(5),
    name: "Planta Baja",
    cols: 4,
    rows: 5,
    layoutItems: [
      {
        id: nanoid(5),
        seat: "free",
        row: 1,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 1,
        col: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 1,
        col: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 1,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 2,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 3,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "free",
        row: 2,
        col: 4,
        createdAt: new Date(),
      },
    ],
  }, */
]);

const dragging = ref(false);
const draggingInfo = computed(() => (dragging.value ? "under drag" : ""));
function log(evt: Event) {
  window.console.log(evt);
}
const alt = useKeyModifier("Alt");
const seat = ref<Seat | null>(null);
</script>
<template>
  <div class="flex gap-5 overflow-x-auto items-start">
    <draggable
      v-model="layoutSetup"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :animation="150"
      handle=".drag-handle"
      item-key="id"
      class="flex gap-4 overflow-x-auto items-start"
    >
      <template #item="{ element: layoutSetup }: { element: LayoutSetup }">
        <div>
          <component
            width="75"
            :is="findSeat(layoutSetup.seat)"
            class="drag-handle cursor-move"
          ></component>
        </div>
      </template>
    </draggable>
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
        group="people"
        :animation="150"
        item-key="id"
        @start="dragging = true"
        @end="dragging = false"
        @change="log"
        class="grid grid-cols-4 gap-2"
        :class="layout.cols === 6 ? 'grid-cols-5' : 'grid-cols-4'"
      >
        <template #item="{ element: layoutItems }: { element: LayoutItems }">
          <div>
            <LayoutItem :layoutItems="layoutItems" />
          </div>
        </template>
      </draggable>

      <footer>
        <button class="text-gray-500">+ Add a Card</button>
        <div><SeatField v-model="seat" /></div>
      </footer>
    </div>
  </div>
</template>
