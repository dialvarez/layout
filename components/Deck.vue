<script setup lang="ts">
import { nanoid } from "nanoid";
import { Layout, LayoutItems } from "types";
import Seat from "types/Seat";

/* const props = defineProps<{
  layout: Layout[] | null;
  modelValue: LayoutItems | null;
}>(); */

//const layout = ref<Layout[] | null>(props.layout);
const layout = ref<Layout[] | null>(null);

const rows = ref<number>(0);
const cols = ref<number>(0);

const totalLayoutItems = computed(() => {
  return layout.value?.map((l) => l.layoutItems.length);
});
const cantLayoutItems = computed(() => {
  return layout.value?.map((l) => l.layoutItems.length).length;
});
function createLayout() {
  layout.value = [];
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
  layout.value.push({
    id: nanoid(5),
    name: "Nuevo Layout",
    cols: cols.value,
    rows: rows.value,
    layoutItems: layoutItems,
  });
}

function log(evt: Event) {
  window.console.log(evt);
}

const seatSetup = ref<Seat>("selected");
const seatSelected = ref<LayoutItems | null>(null);
const seatLayoutSelected = ref<LayoutItems | null>(null);

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
  layout.value?.map((item) => {
    item.layoutItems.map((item2) => {
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
</script>
<template>
  <div>
    <div class="relative rounded-xl overflow-auto p-2">
      <div
        class="grid grid-cols-3 gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg"
      >
        <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">
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
        <div class="p-4 rounded-lg shadow-lg bg-fuchsia-500">
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
          class="p-4 rounded-lg flex flex-col items-center justify-center shadow-lg bg-fuchsia-400"
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
    </div>

    <div
      v-for="l in layout"
      :key="l.id"
      class="column bg-gray-200 text-cyan-950 rounded min-w-[250px]"
    >
      {{ l.name }}
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
          :layoutItems="l.layoutItems"
          v-model="seatLayoutSelected"
          :key="l.id"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
