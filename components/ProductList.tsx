import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/images/slider1.jpg"
            fill
            sizes="25vw"
            alt="products"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 
            transition-opacity easy duration-500"
          />
          <Image
            src="/images/slider.jpg"
            fill
            sizes="25vw"
            alt="products"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span>Product Name</span>
          <span className="">$15</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-white">
          My description
        </div>
        <button
          className="rounded-2xl ring-1 ring-paa w-max text-paa py-2 px-4 text-xs 
        hover:bg-paa hover:text-white"
        >
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/images/slider2.jpg"
            fill
            sizes="25vw"
            alt="products"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 
            transition-opacity easy duration-500"
          />
          <Image
            src="/images/slider.jpg"
            fill
            sizes="25vw"
            alt="products"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span>Product Name</span>
          <span className="">$15</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-white">
          My description
        </div>
        <button
          className="rounded-2xl ring-1 ring-paa w-max text-paa py-2 px-4 text-xs 
        hover:bg-paa hover:text-white"
        >
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/images/slider1.jpg"
            fill
            sizes="25vw"
            alt="products"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 
            transition-opacity easy duration-500"
          />
          <Image
            src="/images/slider.jpg"
            fill
            sizes="25vw"
            alt="products"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span>Product Name</span>
          <span className="">$15</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-white">
          My description
        </div>
        <button
          className="rounded-2xl ring-1 ring-paa w-max text-paa py-2 px-4 text-xs 
        hover:bg-paa hover:text-white"
        >
          Add to Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/images/slider1.jpg"
            fill
            sizes="25vw"
            alt="products"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 
            transition-opacity easy duration-500"
          />
          <Image
            src="/images/slider.jpg"
            fill
            sizes="25vw"
            alt="products"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span>Product Name</span>
          <span className="">$15</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-white">
          My description
        </div>
        <button
          className="rounded-2xl ring-1 ring-paa w-max text-paa py-2 px-4 text-xs 
        hover:bg-paa hover:text-white"
        >
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
