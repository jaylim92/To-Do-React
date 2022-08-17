import { atom, selector } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "Doing" | "Done";
  }

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
  });
  

  export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get})=> {
      const toDos = get(toDoState)
      return [
        toDos.filter(toDo=> toDo.category === "TO_DO"),
        toDos.filter(toDo=> toDo.category === "Doing"),
        toDos.filter(toDo=> toDo.category === "Done"),
      ]
    }
  })