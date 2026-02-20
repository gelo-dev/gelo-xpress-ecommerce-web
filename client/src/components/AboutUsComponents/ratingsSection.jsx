import ratings from "./JavaScript/ratings"
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon ,StarIcon  } from "@heroicons/react/24/solid";



export default function RatingsSection(){

const ratingCardStyle = "min-w-[360px] rounded-2xl flex justify-center items-center ";
const scrollRef = useRef(null);

const scroll = (direction) => {
  if (!scrollRef.current) return;

  const container = scrollRef.current;
  const scrollAmount = container.clientWidth;

  container.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

const getInitials= (name) =>{
    if (!name) return "";
    const words = name.trim().split(" ");
    // Take first letter of first and last word
    const initials =
        words.length === 1
        ? words[0][0]
        : words[0][0] + words[words.length - 1][0];
    return initials.toUpperCase();
}


    return(
        <section className="h-[60vh] md:h-[70vh] relative">
            <div className="flex flex-col gap-5">
                <h2 className="text-3xl md:text-7xl mb-3 font-bold text-center text-orange-300">
                    Loved by Our Customers
                </h2>
                <p className=" text-center text-lg md:text-2xl font-light">See why shoppers keep coming back.</p>

                <button
                    onClick={() => scroll("left")}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                    bg-white shadow-md p-2 rounded-full"
                >
                    <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                            bg-white shadow-md p-2 rounded-full"
                >
                    <ChevronRightIcon className="w-6 h-6 text-gray-700" />
                </button>
                
                
                    <div
                    ref={scrollRef} 
                    className="flex gap-8  h-50 md:h-65 w-full overflow-x-auto p-2 no-scrollbar scroll-smooth ">
                        {ratings.map((item,index)=>(
                                <div
                                key={index} 
                                className={ratingCardStyle}>
                                    <div className="flex flex-col  h-50 gap-2 md:gap-2 p-5 
                                    justify-center shadow-lg bg-gray-100 
                                    rounded-2xl border border-gray-100 md:border-gray-50">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full overflow-hidden bg-orange-300 text-white flex items-center justify-center font-semibold drop-shadow-md">
                                                {item.image ? (
                                                    <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    getInitials(item.name)
                                                )}
                                            </div>

                                            <span className="font-bold font-serif text-orange-300 text-lg">{item.name}</span>
                                        </div>

                                        <div className="flex flex-col gap-1">
                                                <div className="flex flex-col justify-center items-center">
                                                    <span className="text-blue-800 font-sans">{item.suggestion}</span> 
                                                </div>
                                                <div>
                                                    <span className="text-center block font-light">{'"' +item.comment+'"'}</span>
                                                </div>
                                                <div className="flex gap-2 justify-center">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <StarIcon
                                                        key={star}
                                                        className={`w-5 h-5 ${
                                                            star <= item.rating ? "text-yellow-400" : "text-gray-300"
                                                        }`}
                                                        />
                                                    ))}
                                                </div>
                                        </div>

                                        
                                        

                                    </div>

                                </div>
                        ))}
                        
                    </div>
            </div>
        </section>
    )
}