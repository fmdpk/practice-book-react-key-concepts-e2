import {getTodos} from "../data/todos.js";

export const loader = () => {
  return getTodos()
}
