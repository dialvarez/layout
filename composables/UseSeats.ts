import { Component } from "nuxt/schema";
import Seat from "types/Seat";
import { reactive } from "vue";

 const files: { [key: string]: unknown } = import.meta.glob (
  "../assets/icons/seats/*.svg"
);

export default function UseSeats() {
  const seats: { name: string; component: Component }[] = reactive([]);
  for (const path in files) {
    const component = files[path] as Component;
    const name = path
      .replace("../assets/icons/seats/", "")
      .replace("-seat.svg", "");
    seats.push({ name, component });
  }
  console.log(seats);
  /**
   * Get a single seat component by name
   */
  const findSeat = (name: Seat | null) =>
    seats.find((seat) => seat.name === name)?.component;

  return { seats, findSeat};
}
