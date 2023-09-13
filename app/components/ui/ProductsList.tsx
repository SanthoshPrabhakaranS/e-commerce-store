import { Product } from "@/types";
import React from "react";
import NoResults from "./NoResults";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  title: string;
  items: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h1 className="font-bold text-3xl">{title}</h1>
      {items.length === 0 ? (
        <NoResults />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-10">
            {items.map((item) => {
                return <ProductCard key={item.id} data={item} />
            })}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
