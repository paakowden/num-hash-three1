import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";
//import { wixClientServer } from "@/lib/wixClientServer";
//import { useWixClient } from "@/hooks/useWixClient";
//import { WixClientContext } from "@/context/wixContext";

export default async function Home() {
  //const wixClient = await wixClientServer();

  //const res = await wixClient.products.queryProducts().find();

  //console.log(res);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-32">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={"loading..."}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-32 mb-12">
          Categories
        </h1>
        <Suspense fallback={"loading..."}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-32">
        <h1 className="text-2xl">New Products</h1>
        {/*<ProductList/> */}
      </div>
    </div>
  );
}
