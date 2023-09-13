"use client";

import Currency from "@/app/components/ui/Currency";
import useCart from "@/hooks/useStore";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Summary = () => {
  const cartItem = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment successful.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Payment canceled.");
    }
  }, [searchParams, removeAll]);

  const _totalPrice = cartItem.reduce((price, item) => {
    return price + Number(item.price);
  }, 0);

  const _checkOut = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: cartItem.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h2 className="font-semibold text-xl pb-4 border-b">Order Summary</h2>
      <p className="text-neutral-500 font-semibold py-3 flex flex-row items-center justify-between">
        Order total{" "}
        <span>
          <Currency value={_totalPrice} />
        </span>{" "}
      </p>
      <button
        disabled={cartItem.length === 0}
        onClick={_checkOut}
        className={`bg-black text-white p-3 w-full rounded-full font-semibold hover:opacity-80 transition-all mt-3 ${
          cartItem.length === 0 && "opacity-50 cursor-not-allowed"
        }}`}
      >
        Checkout
      </button>
    </div>
  );
};

export default Summary;
