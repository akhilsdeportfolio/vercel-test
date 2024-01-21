"use client";
import { todoAdded, todoToggled } from "@/lib/features/todos/todosSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log("Data::", data);

  function handleAdd() {
    dispatch(todoAdded({ id: Date.now(), text: "This is todo" }));
  }

  return (
    <main>
      <button onClick={handleAdd}>Add Todo</button>
      {data.map((todo) => (
        <p
          key={todo.id}
          onClick={() => {
            dispatch(todoToggled(todo.id));
          }}
        >
          {todo.text} {todo.completed === false ? "No" : "Yes"}
        </p>
      ))}

      <Link href="/home">Home</Link>
    </main>
  );
}
