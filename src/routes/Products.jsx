import {PRODUCTS} from "../data/products.js";
import {useLoaderData, useNavigate} from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const goToDetail = (id) => {
    navigate(`/products/${id}`)
  }

  return (
      <>
        <p>{data.message}</p>
        <ul>
          {PRODUCTS.map(item => {
            return <li key={item.id} onClick={() => goToDetail(item.id)}>{item.title}</li>
          })}
        </ul>
      </>
  )
}

export const Component = Products
