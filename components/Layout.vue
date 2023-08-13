<script setup lang="ts">
import Seat from "types/Seat";

const seatSetup = ref<Seat>("selected");
</script>
<template>
  <div class="relative rounded-xl overflow-auto p-4">
    <div
      class="grid grid-rows-3 grid-flow-col gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-fuchsia rounded-lg"
    >
      <div class="p-4 rounded-lg shadow-lg bg-fuchsia-200 grid row-span-3">
        <Deck />
      </div>

      <div
        class="p-4 rounded-lg bg-fuchsia-300 grid col-span-1 row-span-2 dark:bg-fuchsia-800 dark:text-fuchsia-400"
      >
        <Deck />
      </div>
      <div
        class="p-4 rounded-lg shadow-lg bg-orange-500 grid place-content-center col-span-1 row-start-3"
      >
        3
        <div>
          <SeatField v-model="seatSetup" />
        </div>
      </div>
    </div>
  </div>
</template>
