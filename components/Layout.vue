<script setup lang="ts">
import { nanoid } from "nanoid";
import draggable from "vuedraggable";
import { Layout, LayoutItems, LayoutSetup } from "types";
import Seat from "types/Seat";
import LayoutItem from "./LayoutItem.vue";
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
        seat: "selected",
        row: 1,
        col: 1,
        createdAt: new Date(),
      },
      {
        id: nanoid(5),
        seat: "selected",
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
const butaca = ref<Seat | null>(null);
const clonedLayouts: Layout[] = layouts.value.map((layout: Layout) => ({
  ...layout,
  layoutItems: layout.layoutItems.map((item) => ({ ...item })),
}));

const pp2 = computed(() =>
  layouts.value.map((item) => ({ ...item.layoutItems }))
);

const pp3 = computed(() =>
  pp2.value.filter((item) => item))
);
const result : Seat= pp2.value.filter(word => word. ==="free");
</script>
<template>
  <div class="relative rounded-xl overflow-auto p-4">
    {{ pp2 }}
    <div
      class="grid grid-rows-3 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg"
    >
      <div
        class="p-4 rounded-lg shadow-lg bg-fuchsia-500 grid place-content-center row-span-3"
      >
        <div
          v-for="layout in layouts"
          :key="layout.id"
          class="column bg-gray-200 text-cyan-950 rounded min-w-[250px]"
        >
          <header class="font-bold mb-1">
            {{ layout.name }}
          </header>
          <div
            v-for="layoutItem in pp2"
            :key=""
            :param="layoutItem.seat"
            v-model="butaca"
          >
            <!--    <LayoutItem
              v-for="layoutItem in layout.layoutItems"
              :key="layoutItem.id"
              :param="layoutItem.seat"
              v-model="butaca"
            /> -->
            <!--   <SeatField :layoutItems="layout.layoutItems" v-model="butaca" /> -->
          </div>
        </div>
      </div>

      <div
        class="p-4 rounded-lg bg-fuchsia-300 grid place-content-center col-span-1 row-span-2 dark:bg-fuchsia-800 dark:text-fuchsia-400"
      >
        02
      </div>
      <div
        class="p-4 rounded-lg shadow-lg bg-orange-500 grid place-content-center col-span-1 row-start-3"
      >
        <div></div>
      </div>
      <div
        class="p-4 rounded-lg shadow-lg bg-blue-400 grid place-content-center row-span-3"
      >
        04
      </div>
    </div>
  </div>
  <div class="flex gap-5 overflow-x-auto items-start">
    <draggable
      v-model="layoutSetup"
      group="people"
      item-key="id"
      sort:false
      :animation="150"
      handle=".drag-handle"
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

      <!--    <draggable
        v-model="layout.layoutItems"
        group="people"
        :animation="150"
        sort:false
        @change="log"
        class="grid grid-cols-4 gap-2"
        :class="layout.cols === 6 ? 'grid-cols-5' : 'grid-cols-4'"
      >
         <template #item="{ element: layoutItems }: { element: LayoutItems }">
          <div>
             <LayoutItem
              v-for="layoutItem in layout.layoutItems"
              :key="layoutItem.id"
              :seat="layoutItem.seat"
              v-model="layoutItem.seat"
            /> 
          </div>
        </template
      </draggable>
>-->
      <footer>
        <button class="text-gray-500">+ Add a Card</button>
      </footer>
    </div>
  </div>
</template>
