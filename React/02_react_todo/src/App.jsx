import { useState } from "react";

import "./App.css";

let todoId = 4;

function App() {
  const [titleVal, setTitleVal] = useState(null);
  const [descriptionVal, setDescriptionVal] = useState(null);
  const [completed, setComplete] = useState(false);

  const btnClick = () => {
    // setComplete((complete) => ({
    //   ...complete,
    //   isCompleted: !complete.isCompleted,
    // }));
    setComplete((complete) => !complete);
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Gym",
      description: "Time 7PM - 9PM",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Go to Officr",
      description: "Time 10AM - 6PM",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Go to Movie",
      description: "Time 10PM - 1AM",
      isCompleted: false,
    },
  ]);

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todoId++,
        title: titleVal,
        description: descriptionVal,
        isCompleted: false,
      },
    ]);
  };
  return (
    <>
      <h1>React Todo App</h1>

      <input
        type="text"
        placeholder="title"
        value={titleVal}
        onChange={(e) => setTitleVal(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="description"
        value={descriptionVal}
        onChange={(e) => setDescriptionVal(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>
            {todo.title} {todo.description}
          </h2>
          {console.log(todo)}
          <button onClick={btnClick}>
            click me {todo.isCompleted ? "Completed" : "unCompleted"}
            {completed ? "comple 1" : "comple 2"}
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
