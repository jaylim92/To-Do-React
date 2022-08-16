import { atom } from "recoil";

export interface IToDos {
    text: string;
    id: number;
    category: "TO_DO" | "Doing" | "Done";
  }

export const toDoState = atom<IToDos[]>({
    key: "toDo",
    default: [],
  });
  