import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.jsx";
import Welcome from "./routes/Welcome.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {index: true, element: <Welcome/>},
      {
        path: '/products',
        loader: async (args) => {
          console.log(args)
          await new Promise(r => setTimeout(r, 1500)); // simulate API delay
          return {message: "This is Products Page"};
        },
        lazy: () => import('./routes/Products.jsx')
      },
      {
        path: '/products/:id',
        loader: async (args) => {
          console.log(args)
          // await new Promise(r => setTimeout(r, 1500)); // simulate API delay
          // return { message: `This is Product ${args.params.id} Detail Page` };
          const response = await fetch(
              'https://jsonplaceholder.typicode.com/posts/' + args.params.id
          );

          let result = await response.json()
          console.log(result)

          if(!response.ok)
          {
            throw new Error('Could not fetch post for id ' + args.params.id);
          }

          return result;
        },
        lazy: () => import('./routes/ProductsDetail.jsx')
      }
    ]
  }
])

function App() {

  return (
      <>
        <RouterProvider router={router}/>
      </>
  )
}

export default App
