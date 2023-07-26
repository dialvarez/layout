import Seat from "./Seat";

export type ID = string;

export interface Column {
  id: ID;
  title: string;
  tasks: Task[];
}

export interface Task {
  id: ID;
  title: string;
  createdAt: Date;
}

export interface Layout {
  id: ID;
  name: string;
  rows: number;
  cols: number;
  layoutItems: LayoutItems[];
}

export interface LayoutSetup {
  id: ID;
  seat: Seat;
}

export interface LayoutItems {
  id: ID;
  seat: Seat; // seat | aisle | stair | coffe | init
  row: number;
  col: number;  
  //image: ImageSeat | null;
  createdAt: Date;
}
