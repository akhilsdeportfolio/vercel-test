"use client";
import { todoAdded, todoToggled } from "@/lib/features/todos/todosSlice";
import {
  Text,
  Box,
  Button,
  Heading,
  Stack,
  ServiceLogo,
  Stepper,
} from "@kiwicom/orbit-components";
import Wizard, { WizardStep } from "@kiwicom/orbit-components/lib/Wizard";
import { Passengers } from "@kiwicom/orbit-components/lib/icons";
import Link from "next/link";
import { useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log("Data::", useId());
  const [activeStep, setActiveStep] = useState(1);

  function handleAdd() {
    dispatch(todoAdded({ id: Date.now(), text: "This is todo" }));
  }

  return (
    <main>
      <Stack
        direction="column"
        align="center"
        spacing="medium"
        desktop={{
          spacing: "large",
        }}
      >
        <Heading type="title4">
          <Stack align="center" direction="row">
            <Passengers />
            Travelers
          </Stack>
        </Heading>
        <div
          style={{
            maxWidth: "8em",
          }}
        >
          <Stepper defaultValue={2} maxValue={10} minValue={1} />
        </div>
      </Stack>
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
