import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to Gym",
      description: "go to gym 7 - 9",
      completed: false,
    },
    {
      id: 2,
      title: "Go to study",
      description: "go to study 10 - 4",
      completed: true,
    },
    {
      id: 3,
      title: "Go to movie",
      description: "go to movie 10 - 1",
      completed: false,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: 4,
        title: "Add new Todo",
        description: "New Todo description",
      },
    ]);
  }
  return (
    <>
      <h1>This is a react and vite application</h1>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <>
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </>
  );
}

export default App;
