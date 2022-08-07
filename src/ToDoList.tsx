import { useState } from "react";
import { useForm } from "react-hook-form";

/* export function ToDoList() {
  const [toDo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write Here" />
        <button>Add</button>
      </form>
    </div>
  );
}
 */

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstName", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", { required: true, minLength: 5 })}
          placeholder="username"
        />
        <input
          {...register("password", { required: "Password is required" })}
          placeholder="Password"
        />
        <input
          {...register("password1", { required: true })}
          placeholder="Password validation"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
