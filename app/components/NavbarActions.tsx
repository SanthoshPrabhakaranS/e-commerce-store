"use client";

import React, { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/useStore";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart((state) => state.items);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <button
      onClick={() => router.push("/cart")}
      className="bg-black px-4 py-2 flex flex-row gap-2 items-center rounded-full hover:opacity-80 transition-all"
    >
      <ShoppingBag color="white" size={20} />{" "}
      <span className="text-white text-sm font-medium">{cart.length}</span>
    </button>
  );
};

export default NavbarActions;
