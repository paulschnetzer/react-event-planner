import React from 'react';

export default function Todo({ todos, toggleTodo }) {
  return todos.map((todo) => {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.name + ' ' + todo.secondname}
        </label>
      </div>
    );
  });
}
