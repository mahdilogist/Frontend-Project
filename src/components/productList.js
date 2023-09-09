"use client";
import { useSelector } from "react-redux";
import Card from "./card";
function ProductList() {
  const { products } = useSelector((state) => state);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-10 ">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
