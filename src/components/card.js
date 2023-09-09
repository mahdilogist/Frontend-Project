import Image from "next/image";
import Link from "next/link";
import { RemoveProduct } from "../redux/features/productSlice";
import { useDispatch } from "react-redux";

function Card({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center gap-4 pb-4">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          className="rounded w-full h-full object-cover"
          alt="/"
          width={250}
          height={250}
        />
      </Link>
      <h1 className=" font-bold text-xl">{product.name}</h1>
      <button
        onClick={() => dispatch(RemoveProduct(product.id))}
        className="rounded py-2 px-4 bg-gray-600 text-white"
      >
        remove
      </button>
    </div>
  );
}

export default Card;
