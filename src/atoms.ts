import { atom, selector } from "recoil";

type Category =  "TO_DO" | "DOING" | "DONE";

export interface IToDo {
    text: string;
    id: number;
    category: Category;
  }

  export const categoryState = atom<Category>({
    key: "category",
    default: "TO_DO"
  })


export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
  });



  export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get})=> {
      const toDos = get(toDoState)
      const category = get(categoryState)
      return toDos.filter((toDo) => toDo.category === category)
    }
  })