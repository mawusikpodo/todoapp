import React from "react";
import { Task } from "./Task";

export const Tasks = (props) => {
  const { task, onDelete, onToggle } = props;

  return (
    <>
      {task.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};
