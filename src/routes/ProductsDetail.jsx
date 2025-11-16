import {useParams} from "react-router-dom";

const ProductsDetail = () => {
  const params = useParams()
  return (
      <>
        <span>products detail: {params.id}</span>
      </>
  )
}

export const Component = ProductsDetail
