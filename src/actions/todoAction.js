import {addTodo} from "../data/todos.js";
import {redirect} from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const enteredText = formData.get('text');
  addTodo(enteredText);
  return redirect('/');
}
