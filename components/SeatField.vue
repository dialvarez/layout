<script lang="ts" setup>
const { seats } = UseSeats();
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  {{ seats }}
  <div class="seat-container">
    <component
      v-for="seat in seats"
      :is=seat.component
      :key=seat.name
      :class="{ selected: modelValue === seat.name }"
      @click="
        $emit(
          'update:modelValue',
          seat.name === modelValue ? null : seat.name
        )
      "
    ></component> 
  </div>
</template>