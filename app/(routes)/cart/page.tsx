"use client";

import Container from "@/app/components/ui/Container";
import React, { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import useCart from "@/hooks/useStore";
import Summary from "./components/Summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart((state) => state.items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="py-[2rem] min-h-full">
      <Container>
        <h1 className="mb-3 font-bold text-2xl">Shopping Cart</h1>
        <div className="grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-7">
            {cart.length === 0 && (
              <div className="h-full flex justify-center items-center font-semibold text-sm">
                No items added to the cart!
              </div>
            )}
            {cart.length > 0 &&
              cart.map((item) => {
                return <CartItem key={item.id} item={item} />;
              })}
          </div>
          <div className="lg:col-span-5">
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
