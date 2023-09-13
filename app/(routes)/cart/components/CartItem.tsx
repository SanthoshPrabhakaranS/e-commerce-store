"use client";

import Currency from "@/app/components/ui/Currency";
import useCart from "@/hooks/useStore";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CartItemProps {
  item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const removeItem = useCart((state) => state.removeItem);

  const _removeItem = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 items-start border-b py-3 relative">
      <button
        onClick={_removeItem}
        className="p-1 rounded-full flex justify-center items-center border-1 absolute right-3 cursor-pointer shadow-md"
      >
        <X className="" size={18} />
      </button>
      <div>
        <Image
          src={item.images[1].url}
          alt="product-image"
          width={"200"}
          height={"200"}
          className="h-40 w-full md:w-40 object-cover rounded-md"
        />
      </div>
      <div className="space-y-3">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <div className="flex flex-row items-center font-semibold gap-2">
          Price:{" "}
          <span className="font-medium -mt-2">
            <Currency value={item.price} />
          </span>{" "}
        </div>
        <div className="flex flex-row items-center font-semibold gap-2">
          Color: <span className="font-medium">{item.color.name}</span>{" "}
          <span
            className="h-6 w-6 border-2 rounded-full"
            style={{ backgroundColor: item.color.value }}
          ></span>{" "}
        </div>
        <div className="flex flex-row items-center font-semibold gap-2">
          Size: <span className="font-medium">{item.size.name}</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
