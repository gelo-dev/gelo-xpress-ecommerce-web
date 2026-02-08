import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function ImageCarousel() {
  const images = [
    "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770531581/mec4411-travel-bag-4326731_1920_hxyyit.jpg",
    "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770070819/rxvq7safydpglikuer8z.png",
    "https://res.cloudinary.com/dl1oaa2td/image/upload/v1769110606/cld-sample-5.jpg",
    "https://res.cloudinary.com/dl1oaa2td/image/upload/v1769110597/samples/shoe.jpg",
    "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770532337/publicdomainpictures-appliance-2255_1920_yypa9v.jpg",
    "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770532301/hakimsantoso-woman-6082552_1920_unvhed.jpg",
    "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770532224/taniadimas-bucket-1005891_1920_r6flxx.jpg",
    "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770532865/blingfashioncoltd-wood-sunglasses-2500248_1920_b5e1ez.jpg",
  ]
 const [startIndex, setStartIndex] = useState(0);
  const totalImages = images.length;

  const prev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const next = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };
  return (
    <div className="relative w-full overflow-hidden">
      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Sliding Container */}
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${(startIndex * 25) % (totalImages * 25)}%)` }}>
        {images.concat(images.slice(0, 4)).map((imgSrc, index) => (
          <div key={index} className="w-1/4 flex-shrink-0 p-2">
            <img
              src={imgSrc}
              alt={`Image ${index + 1}`}
              className="h-[60vh] w-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
