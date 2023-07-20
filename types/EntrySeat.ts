import Seat from "./Seat";

export default interface EntrySeat {
  id: number;
  seat: Seat | null;
  createdAt: Date;
  userId: number;
}