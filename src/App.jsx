import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root.jsx";
import Todos from "./pages/Todos.jsx";

import {loader as todosLoader} from './loaders/todosLoader.js'
import {loader as todoLoader} from './loaders/todoLoader.js'

import {action as NewTodoAction} from './actions/todoAction.js'
import {action as SelectedTodoAction} from './actions/SelectedTodoAction.js'
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Todos />,
        loader: todosLoader
      },
      {
        path: '/new',
        action: NewTodoAction,
        lazy: () => import('./pages/NewTodo.jsx')
      },
      {
        path: ':id',
        loader: todoLoader,
        action: SelectedTodoAction,
        lazy: () => import('./pages/SelectedTodo.jsx')
      }
    ]
  }
])

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
