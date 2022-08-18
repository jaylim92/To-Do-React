import React from "react";
import { Categories, IToDo, toDoState } from "../atoms";
import { useRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prev) =>
      prev.map((oldToDo) => {
        return oldToDo.id === id
          ? { text, id, category: name as any }
          : oldToDo;
      })
    );
  };
  const handelDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { id },
    } = event;
    setToDos((prev) => {
      return prev.filter((toDo) => toDo.id !== Number(id));
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick={handelDelete} id={`${id}`}>
        Delete
      </button>
    </li>
  );
}

export default ToDo;
