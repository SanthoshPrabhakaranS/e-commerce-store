"use client";

import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/useStore";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const addCart = useCart((state) => state.addItem);

  return (
    <div className="border p-3 rounded-xl">
      <div className="aspect-square group rounded-xl bg-gray-100 relative cursor-pointer">
        <Image
          alt="product-image"
          src={data.images[1].url}
          fill
          className="object-cover rounded-xl aspect-square"
        />
        <div className="absolute w-full transition opacity-0 group-hover:opacity-100 flex justify-center bottom-2 gap-4">
          <IconButton
            onClick={() => {
              router.push(`/product/${data?.id}`);
            }}
            icon={<Expand size={20} className="text-gray-500" />}
          />
          <IconButton
            onClick={() => {addCart(data)}}
            icon={<ShoppingCart size={20} className="text-gray-500" />}
          />
        </div>
      </div>
      <div className="mt-2">
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-neutral-500">{data.category.name}</p>
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
