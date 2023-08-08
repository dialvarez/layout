<script setup lang="ts">
import { nanoid } from "nanoid";
import { LayoutItems } from "types";
import Seat from "types/Seat";
const { findSeat } = UseSeats();
import { useActiveElement } from '@vueuse/core'

const activeElement = useActiveElement()
const key = computed(() => activeElement.value?.dataset?.id || 'null')

watch(activeElement, (el) => {
  console.log('focus changed to', el)
})
defineProps<{
  layoutItems: LayoutItems[];
  modelValue: LayoutItems | null;
}>();
defineEmits(["update:modelValue"]);

const control = useKeyModifier("Control")

</script>
<template>
  <div class="layoutItem-container">
    <note
    class="mb-3"
  >
    Select the inputs below to see the changes
  </note>
  <div
    class="
    grid
    grid-cols-1
    md:grid-cols-3
    gap-2"
  >
    <input
      v-for="i in 6"
      :key="i"
      type="text"
      :data-id="i"
      class="!my-0 !min-w-0"

    >
  </div>
  <div class="mt-2">
    Current Active Element:
    <span class="text-primary">{{ key }}</span>
  </div>
    <!--  <DragHandle class="pr-2" /> -->
    <component
      v-for="layoutItem in layoutItems"
      :is="findSeat(layoutItem.seat)"
      :key="layoutItem.id"
      :class="{ selected: modelValue === layoutItem }"
      @click="control ? $emit('update:modelValue', layoutItem === modelValue ? null : layoutItem) : null"
      :data-id="layoutItem.id"
    ></component>
  </div>
</template>
<style scopedS>
.layoutItem-container {
  @apply grid  gap-4;
}
.layoutItem-container svg {
  transition: 0.2s ease all;
  @apply cursor-pointer;
}
.layoutItem-container svg.selected,
.layoutItem-container svg.selected path {
  @apply ring-2 ring-gray-700 rounded-3xl;
}
.layoutItem-container svg:hover {
  transform: scale(1.3);
}
</style>
