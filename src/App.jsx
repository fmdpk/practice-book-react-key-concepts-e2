
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import Welcome from "./routes/Welcome.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {index: true, element: <Welcome />},
      {
        path: '/products',
        loader: async () => {
          await new Promise(r => setTimeout(r, 1500)); // simulate API delay
          return { message: "This is Products Page" };
        },
        lazy: () => import('./routes/Products.jsx')},
      {path: '/products/:id', lazy: () => import('./routes/ProductsDetail.jsx')}
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
