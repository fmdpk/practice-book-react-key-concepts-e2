import {useLoaderData, useParams} from "react-router-dom";

const ProductsDetail = () => {
  const params = useParams()
  const data = useLoaderData();
  return (
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <span>products detail: {params.id}</span>
        <span>id: {data.id}</span>
        <span>userId: {data.userId}</span>
        <span>title: {data.title}</span>
        <span>body: {data.body}</span>
      </div>
  )
}

export const Component = ProductsDetail
