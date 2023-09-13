"use client";

import { Product } from "@/types";
import React from "react";
import Currency from "../ui/Currency";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/useStore";

interface InfoProps {
  product: Product;
}

const Info: React.FC<InfoProps> = ({ product }) => {
  const addCart = useCart((state) => state.addItem);

  return (
    <div>
      <div className="border-b pb-3 pt-6 lg:pt-0">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>
          <Currency value={product.price} />{" "}
        </p>
      </div>
      <div className="flex items-center gap-2 pt-3">
        <p className="font-semibold">Size: </p>
        <p className="font-medium">{product.size.name}</p>
      </div>
      <div className="flex items-center gap-2 py-3">
        <p className="font-semibold">Color: </p>
        <div className="flex items-center gap-2">
          <p className="font-medium">{product.color.name} </p>
          <div
            className="h-6 w-6 rounded-full"
            style={{ backgroundColor: product.color?.value }}
          ></div>
        </div>
      </div>
      <div>
        <button onClick={() => {addCart(product)}} className="bg-black px-5 py-3 flex flex-row gap-2 items-center rounded-full hover:opacity-80 transition-all mt-2">
          <ShoppingCart color="white" size={20} />{" "}
          <span className="text-white text-sm font-medium">Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Info;
