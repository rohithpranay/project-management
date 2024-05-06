import { useState } from "react";

function NewTask({ onAdd }) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleClick() {
    onAdd(task);
    setTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        ref={task}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={task}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
