import React from "react";
import Container from "../components/ui/Container";
import Billboard from "../components/ui/Billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductsList from "../components/ui/ProductsList";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("edf11c58-f2dd-4b2e-9d84-345baaf3d66d");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div>
        <ProductsList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
