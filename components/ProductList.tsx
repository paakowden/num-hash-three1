import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={
                product.media?.mainMedia?.image?.url || "/images/3whiskey.jpg"
              }
              fill
              sizes="25vw"
              alt="products"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 
            transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={
                  product.media?.items[1]?.image?.url || "/images/slider.jpg"
                }
                fill
                sizes="25vw"
                alt="products"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span>{product.name}</span>
            <span className="">${product.price?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500 dark:text-white"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section) => section.title === "#3 Whiskey"
                  )?.description || ""
                ),
              }}
            ></div>
          )}
          <button
            className="rounded-2xl ring-1 ring-paa w-max text-paa py-2 px-4 text-xs 
        hover:bg-paa hover:text-white"
          >
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
