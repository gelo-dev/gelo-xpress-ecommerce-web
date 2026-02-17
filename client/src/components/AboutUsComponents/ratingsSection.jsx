import { useEffect, useState,  } from "react";
import ratings from "./JavaScript/ratings"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function RatingsSections(){

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

useEffect(() => {
    const updateItems = () => {
        if (window.innerWidth < 640) {
        setItemsToShow(1); // mobile
        } else if (window.innerWidth < 1024) {
        setItemsToShow(2); // tablet
        } else {
        setItemsToShow(4); // desktop
        }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
}, []);

    const handleNext = () => {
    if (currentIndex < ratings.length - itemsToShow) {
        setCurrentIndex(currentIndex + 1);
    }
    };

    const handlePrev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
    }
    };


    return(
        <section className="h-[70vh] relative ">
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl md:text-7xl mb-3 font-bold text-center text-orange-300">
                    Loved by Our Customers
                </h2>
                <p className=" text-center text-lg md:text-2xl font-light">See why shoppers keep coming back.</p>
                
            </div>

                <button
                    onClick={handlePrev}
                    className="absolute left-5 top-1/2 z-10 bg-white shadow-md rounded-full p-2"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                                onClick={handleNext}
                                className="absolute right-5 top-1/2 z-10 bg-white shadow-md rounded-full p-2"
                            >
                                <ChevronRightIcon className="h-6 w-6" />
                </button>

                <div className="overflow-hidden   px-10 mt-5 ">
                    <div
                    className="flex transition-transform duration-500 ease-in-out "
                    style={{
                       transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                    }}
                    >
                    {ratings.map((item, index) => (
                        <div
                        key={index}
                        className="shrink-0 w-1/4 p-2 mt-4"
                        >
                        <div className="h-50 bg-amber-200 rounded-2xl flex items-center justify-center">
                            {item.name}
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

             

               

        </section>
    )
}