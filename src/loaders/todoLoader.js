import {getTodo} from "../data/todos.js";

export function loader({ params }) {
  return getTodo(params.id);
}
