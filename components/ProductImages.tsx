"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { id: 1, url: "/images/slider.jpg" },
  { id: 2, url: "/images/slider1.jpg" },
  { id: 3, url: "/images/slider2.jpg" },
  { id: 4, url: "/images/slider.jpg" },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          fill
          sizes="50vw"
          alt=""
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8 cursor-pointer">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              fill
              sizes="30vw"
              alt=""
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
