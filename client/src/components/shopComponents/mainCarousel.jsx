import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function ImageCarousel() {
  const categoryImages = [
    {
      name: "Electronics & Gadgets",
      image:
        "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770612345/Electronics_Gadgets_gviwfj.png",
    },
    {
      name: "Home & Living",
      image:
        "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770612703/Home_Living_ellq0j.png",
    },
    {
      name: "Fashion & Apparel",
      image:
        "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770612774/Fashion_Apparel_bbtlqb.png",
    },
    {
      name: "Toys & Kids",
      image:
        "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770613044/Toys_Kids_f8gr7h.png",
    },
    {
      name: "Sports & Outdoors",
      image:
        "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770613193/Sports_Outdoors_uciqi7.png",
    },
    {
      name: "Beauty & Personal Care",
      image:
        "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770613257/Beauty_Personal_Care_bne4j1.png",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const totalImages = categoryImages.length;

  const prev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const extendedImages = [...categoryImages,...categoryImages.slice(0, 4),];

  return (
      <div className="relative w-full overflow-hidden">
      
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * 25}%)`,
          }}
        >
          {extendedImages.map((item, index) => (
            <div key={index} className="w-1/4 shrink-0 p-2">
              <div className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[60vh] w-full object-cover rounded-2xl hover:scale-95"
                />
        
                <p className="mt-4 text-base font-medium tracking-wide text-orange-500 text-center">
                  {item.name}
                </p>


              </div>
            </div>
          ))}
        </div>

      </div>
  );
}
