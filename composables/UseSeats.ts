import type { Component } from "@vue/runtime-core";
import { Kinde } from "types/emun";
//import ImageSeat from "types/ImageSeat";
import { reactive } from "vue";

const files: { [key: string]: unknown } = import.meta.glob(
  "../assets/images/seats/*.svg"
);

export default function UseSeats() {
  const seats: { name: string; component: Component }[] = reactive([]);
  for (const path in files) {
    const component = files[path] as Component;
    const name = path
      .replace("../assets/images/seats/", "")
      .replace("-seat.svg", "");
    seats.push({ name, component });
  }
  console.log(seats);
  /**
   * Get a single seat component by name
   */
  const findSeat = (name: Kinde | null) =>
    seats.find((seat) => seat.name === name)?.component;

  return { seats, findSeat };
}
