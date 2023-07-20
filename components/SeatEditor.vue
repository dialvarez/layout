<script lang="ts" setup>
import EntrySeat from "types/EntrySeat";
import Seat from "types/Seat";
import { ref  } from "vue";

// data
const seat = ref<Seat | null>(null);

// template refs

// events
const emit = defineEmits<{
  (e: "@create", entrySeat: EntrySeat): void;
}>();


const handleSubmit = () => {
  emit("@create", {
    seat: seat.value,
    createdAt: new Date(),
    userId: 1,
    id: Math.random(),
  });
  seat.value = null;
};
</script>
<template>
 
    <SeatField v-model="seat" @click ="handleSubmit"/>

</template>