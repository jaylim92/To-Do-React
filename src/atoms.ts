import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO"="TO_DO",
  "DOING"="DOING",
  "DONE"="DONE"
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
  }

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO
  })

const localStorageEffect = (key : any)=>({setSelf, onSet}:any)=>{
  const savedValue = localStorage.getItem(key);
  if (savedValue !== null){
    setSelf(JSON.parse(savedValue))
  }
  onSet((newValue: any)=>{
    localStorage.setItem(key, JSON.stringify(newValue))
  })
}


export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects: [localStorageEffect("toDo")]
  });



  export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get})=> {
      const toDos = get(toDoState)
      const category = get(categoryState)
      return toDos.filter((toDo) => toDo.category === category)
    }
  })