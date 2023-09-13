import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/app/components/gallery/Gallery";
import Info from "@/app/components/info/Info";
import Container from "@/app/components/ui/Container";
import ProductsList from "@/app/components/ui/ProductsList";
import React from "react";

interface SingleProductPageProps {
  params: {
    productId: string;
  };
}

const SingleProductPage: React.FC<SingleProductPageProps> = async ({
  params,
}) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <div>
      <Container>
        <div className="py-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start gap-5 pb-5">
            {/* Gallery */}
            <Gallery images={product.images} />
            {/* Info */}
            <Info product={product} />
          </div>
          <div className="mt-[2rem]">
            <ProductsList title="Related Products" items={suggestedProducts} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProductPage;
