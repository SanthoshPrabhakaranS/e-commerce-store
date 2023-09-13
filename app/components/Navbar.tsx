import React from "react";
import Container from "./ui/Container";
import Link from "next/link";
import MainNav from "./MainNav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./NavbarActions";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="flex flex-row items-center justify-between py-4 gap-5 h-16">
          <div className="flex  items-center gap-5">
            <Link href={"/"}>
              <p className="font-bold text-xl">STORE</p>
            </Link>
            <MainNav data={categories} />
          </div>
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
