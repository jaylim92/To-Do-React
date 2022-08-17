import { IToDo, toDoState } from "../atoms";
import { useSetRecoilState } from "recoil";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
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
  return (
    <li>
      <span>{text}</span>
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "Doing" && (
        <button name="Doing" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "Done" && (
        <button name="Done" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
