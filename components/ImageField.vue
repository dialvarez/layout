<script lang="ts" setup>
import UseSeats from "../composables/UseSeats";

const { seats } = UseSeats();
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>
<template>
  <div class="emoji-container p-2">
    <component
      v-for="seat in seats"
      :is="seat.component"
      :key="seat.name"
      :class="{ selected: modelValue === seat.name }"
      @click="
        $emit('update:modelValue', seat.name === modelValue ? null : seat.name)
      "
    ></component>
  </div>
</template>
