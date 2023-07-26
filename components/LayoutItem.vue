<script setup lang="ts">
import { LayoutItems } from "types";
import Seat from "types/Seat";


const props = defineProps<{
  seat: Seat;
  modelValue:Seat;
}>();
defineEmits(["update:modelValue"]);

</script>
<template>

 
  <div class="layoutItem">
    <!--  <DragHandle class="pr-2" /> -->
 {{ props.seat }}
    <component
      width="40"
      :is=seat
      :class="{ selected: props.modelValue === props.seat }"
    ></component>
  </div>
</template>
<style>
.layoutItem-container {
  @apply grid grid-cols-3 gap-4;
}
.layoutItem-container svg {
  transition: 0.2s ease all;
  @apply  cursor-pointer;
}
.layoutItem-container svg.selected,
.layoutItem-container svg.selected path {
  @apply ring-2 ring-gray-700 rounded-3xl p-1;
  @apply bg-gray-200 ;
}
.layoutItem-container svg:hover {
  transform: scale(1.3);
}
</style>
