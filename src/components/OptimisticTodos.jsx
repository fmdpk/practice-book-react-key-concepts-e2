import {useOptimistic, useState} from 'react';

let storedTodos = [];

export async function saveTodo(todo) {
  // dummy function that simulates a slow backend which manages todos
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const newTodo = {...todo, id: new Date().getTime()};
  storedTodos = [...storedTodos, newTodo];
  return storedTodos;
}

export default function OptimisticTodos() {
  const loadedTodos = getTodos(); // initial fetch
  const [todos, setTodos] = useState(loadedTodos);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
      todos,
      (currentState, optimisticValue) => {
        return [...currentState, {...optimisticValue, id: 'temp'}];
      }
  );

  async function storeTodoAction(formData) {
    const todo = {title: formData.get('title')};
    addOptimisticTodo(todo);
    const updatedTodos = await saveTodo(todo);
    setTodos(updatedTodos);
  }

  return (
      <>
        <form action={storeTodoAction}>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title"/>
          </p>
          <p className="actions">
            <SubmitButton/>
          </p>
        </form>
        <div id="todos">
          <h2>My Todos</h2>
          {optimisticTodos.length === 0 && <p>No todos found.</p>}
          {optimisticTodos.length > 0 && (
              <ul>
                {optimisticTodos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
              </ul>
          )}
        </div>
      </>
  );
}
