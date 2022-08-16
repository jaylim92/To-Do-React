import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { DefaultValue, errorSelector } from "recoil";

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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "password are not the same" },
        { shouldFocus: true }
      );
    }
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          style={{ borderColor: errors?.email?.message ? "red" : "" }}
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "First Name is required" })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "Last Name is required" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {
            required: "Username at least 3words",
            minLength: 3,
          })}
          placeholder="username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password too short",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", { required: true })}
          placeholder="Password validation"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
