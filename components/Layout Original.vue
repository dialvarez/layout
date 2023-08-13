<script setup lang="ts">
import { nanoid } from "nanoid";
import draggable from "vuedraggable";
import { Layout, LayoutItems, LayoutSetup } from "types";
import Seat from "types/Seat";
const { findSeat } = UseSeats();

const rows = ref<number>(0);
const cols = ref<number>(0);
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
  /*  {
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
  },*/
  /*   {
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

// Calcular el total de elementos en layoutItems de todos los layouts
const totalLayoutItems = computed(() => {
  return layouts.value.map((layout) => layout.layoutItems.length);
});

const cantLayoutItems = computed(() => {
  return layouts.value.map((layout) => layout.layoutItems.length).length;
});
const dragging = ref(false);
const draggingInfo = computed(() => (dragging.value ? "under drag" : ""));
function log(evt: Event) {
  window.console.log(evt);
}
const alt = useKeyModifier("Alt");
const seatSetup = ref<Seat>("selected");
const seatSelected = ref<LayoutItems | null>(null);

//const seatLayoutSelected = ref<LayoutItems | null>(null);

const seatLayoutSelected = ref<LayoutItems | null>(null);

const clonedLayouts: Layout[] = layouts.value.map((layout: Layout) => ({
  ...layout,
  layoutItems: layout.layoutItems.map((item) => ({ ...item })),
}));

const layoutPlantaAlta = () => {
  return layouts.value.map((item) => item.name === "Planta Alta");
};

const updateImage = (layoutItem: LayoutItems) => {
  console.log("un click  " + layoutItem.id);
  seatSelected.value = layoutItem;
};

watch(
  () => seatLayoutSelected,
  (newValue, oldValue) => {
    console.log(
      //`newValue is ${newValue.value?.id} | COL ${newValue.value?.col} and oldValue is ${oldValue.value?.seat}`
      `COL ${newValue.value?.col} and ROW ${newValue.value?.row}`
    );
    change_state(newValue.value?.id);
  },
  { deep: true }
);

const change_state = (id: any) => {
  layouts.value.map((item) => {
    item.layoutItems.map((item2) => {
      // item2.id === id ? (item2.seat = "selected") : (item2.seat = "free");
      if (item2.id === id) {
        item2.seat = seatSetup.value;
      }
    });
  });
};

const seleccionado = (layoutItem: LayoutItems) => {
  if (seatSetup.value != null) {
    layoutItem.seat = seatSetup.value;
  }
  console.log(layoutItem.seat);
};
function createLayout() {
  layouts.value = [];
  let layoutItems: LayoutItems[] = [];
  let item: LayoutItems;
  for (let r = 1; r < rows.value + 1; r++) {
    item = {
      id: nanoid(5),
      seat: "free",
      row: r,
      col: 1,
      createdAt: new Date(),
    };
    layoutItems = [...layoutItems, item];
    for (let c = 2; c < cols.value + 1; c++) {
      item = {
        id: nanoid(5),
        seat: c == 3 ? "aisle" : "free",
        row: r,
        col: c,
        createdAt: new Date(),
      };
      layoutItems = [...layoutItems, item];
    }
  }
  layouts.value.push({
    id: nanoid(5),
    name: "Nuevo Layout",
    cols: cols.value,
    rows: rows.value,
    layoutItems: layoutItems,
  });
}
</script>
<template>
  <div class="relative rounded-xl overflow-auto p-4">
    <div
      class="grid grid-rows-3 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg"
    >
      <div
        class="p-4 rounded-lg shadow-lg bg-fuchsia-500 grid place-content-center row-span-3"
      >
        <div class="grid grid-cols-8 gap-3 p-3">
          <div class="col-span-3 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <label for="rows" class="block text-sm font-medium text-gray-700"
              >Filas</label
            >
            <input
              type="number"
              name="rows"
              id="rows"
              autocomplete="given-rows"
              placeholder="Filas"
              min="1"
              max="15"
              v-model="rows"
              class="text-gray-900 block w-full"
            />
          </div>

          <div class="col-span-3 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <label for="cols" class="block text-sm font-medium text-gray-700"
              >Columnas</label
            >
            <input
              type="number"
              name="cols"
              id="cols"
              autocomplete="cols"
              placeholder="Cols"
              min="1"
              max="5"
              v-model="cols"
              class="text-gray-900 block w-full"
            />
          </div>
          <div
            class="grid justify-items-end content-center col-span-3 sm:col-span-2 md:col-span-1 lg:col-span-1"
          >
            <button
              type="button"
              @click="createLayout()"
              class="bg-blue-700 hover:bg-blue-500 font-semibold py-1.5 px-3 rounded-md"
            >
              Crear
            </button>
          </div>
        </div>

        <div
          v-for="layout in layouts"
          :key="layout.id"
          class="column bg-gray-200 text-cyan-950 rounded min-w-[250px]"
        >
          {{ layout.name }}
          <header class="font-bold mb-1">
            {{ cantLayoutItems }}
          </header>
          <div class="ml-4 flex flex-1 flex-col mb-2">
            <div class="flex text-base font-medium text-gray-900">
              <h3>Current Element:</h3>
              <p class="ml-1 mr-5">{{ seatLayoutSelected?.id }}</p>
              <h3>Current Setting::</h3>
              <p class="ml-1">{{ seatSetup }}</p>
            </div>
            <div class="flex text-base font-medium text-gray-900">
              <h3>Col:</h3>
              <p class="ml-1 mr-5">{{ seatLayoutSelected?.col }}</p>
              <h3>Cantidad LayoutItems:</h3>
              <p class="ml-1 mr-5">{{ totalLayoutItems }}</p>
            </div>
            <div class="flex text-base font-medium text-gray-900">
              <h3>Cantidad Filas:</h3>
              <p class="ml-1">{{ rows }}</p>
            </div>
            <div class="flex text-base font-medium text-gray-900">
              <h3>Cantidad Columnas:</h3>
              <p class="ml-1">{{ cols }}</p>
            </div>
          </div>

          <div>
            <LayoutItem
              class="seat-layout grid grid-cols-5 gap-2"
              :layoutItems="layout.layoutItems"
              v-model="seatLayoutSelected"
              :key="layout.id"
            />
          </div>
        </div>
      </div>

      <div
        class="p-4 rounded-lg bg-fuchsia-300 grid place-content-center col-span-1 row-span-2 dark:bg-fuchsia-800 dark:text-fuchsia-400"
      ></div>
      <div
        class="p-4 rounded-lg shadow-lg bg-orange-500 grid place-content-center col-span-1 row-start-3"
      >
        <div>
          <SeatField v-model="seatSetup" />
        </div>
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
