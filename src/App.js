import React, { useState, useRef, useEffect } from 'react';
import RenderTodos from './RenderTodos';
let idNumber = 0;
//hello world
// const LOCAL_STORAGE_KEY = 'todosApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const FirstNameRef = useRef();
  const SecondNameRef = useRef();

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const firstName = FirstNameRef.current.value;
    const secondName = SecondNameRef.current.value;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: idNumber++,
          name: firstName,
          secondname: secondName,
          complete: false,
        },
      ];
    });
  }
  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <input ref={FirstNameRef} type="text" />
      <input ref={SecondNameRef} type="text" />

      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>

      <RenderTodos todos={todos} toggleTodo={toggleTodo} />
    </>
  );
}

export default App;
// useEffect(() => {
//   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   if (storedTodos) setTodos(storedTodos);
// }, []);

// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
// }, [todos]);
