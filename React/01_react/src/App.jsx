import { useState } from "react";
import "./App.css";

// any time when parent re-renders then its child also re-renders as well as

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to Gym",
      description: "go to gym 7 - 9",
      completed: false,
    },
    {
      title: "Go to study",
      description: "go to study 10 - 4",
      completed: true,
    },
    {
      title: "Go to movie",
      description: "go to movie 10 - 1",
      completed: false,
    },
  ]);

  function addTodo() {
    // let newTodos = [];
    // for (let i = 0; i < todos.length; i++) {
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push({
    //   id: 4,
    //   title: "New todo push methods",
    //   description: "new todo descriptiom",
    // });
    // setTodos(newTodos);

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
        <Todo
          key={todo.title}
          title={todo.title}
          description={todo.description}
        />
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
