"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

function ProductDetails({ params }) {
  const { products } = useSelector((state) => state);
  const product = products[params.id].details;
  // console.log(product)
  return (
    <div className="lg:flex lg:justify-evenly lg:gap-x-64 p-10 bg-neutral-800 h-fit text-white  ">
      <div className="w-full lg:w-80">
        <h1 className="my-6 text-xl">{product.description}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic
          vitae vero cupiditate minus! Nulla aut quia officiis fuga vero
          doloremque quas facilis, voluptate voluptatibus.
        </p>
        <Link href="/">
          <button className="rounded py-2 px-4 bg-gray-600 text-white my-10">
            Back to Home
          </button>
        </Link>
      </div>
      <div className="lg:flex w-full gap-10">
        <Image
          src={product.image1}
          className="rounded w-full h-full"
          alt="/"
          width={250}
          height={250}
        />
        <Image
          src={product.image2}
          className="rounded w-full h-full"
          alt="/"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}

export default ProductDetails;
