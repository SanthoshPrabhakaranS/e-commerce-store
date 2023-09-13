import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/app/components/ui/Billboard";
import Container from "@/app/components/ui/Container";
import React from "react";
import Filter from "./Filter";
import NoResults from "@/app/components/ui/NoResults";
import ProductCard from "@/app/components/ui/ProductCard";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div>
      <Container>
        <Billboard data={category.billboard as any} />
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
          {/* Mobile Filters */}
          <div className="hidden lg:block">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
          <div className="lg:col-span-4">
            {products.length === 0 ? (
              <NoResults />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pb-10">
                {products.map((item) => {
                  return <ProductCard key={item.id} data={item} />;
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
