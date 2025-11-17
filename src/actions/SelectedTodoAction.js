import {deleteTodo, updateTodo} from "../data/todos.js";
import {redirect} from "react-router-dom";

export async function action({ request, params }) {
  const todoId = params.id;
  const formData = await request.formData();
  const method = formData.get('_method');

  if (method !== 'DELETE') {
    const enteredText = formData.get('text');
    updateTodo(todoId, enteredText);
  }

  if (method === 'DELETE') {
    deleteTodo(todoId);
  }
  return redirect('/');
}
