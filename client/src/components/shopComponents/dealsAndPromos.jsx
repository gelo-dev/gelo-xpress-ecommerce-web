export default function DealsAndPromoSection(){

const slides =[
    {
        bigText: "Trending Now",
        image:"https://res.cloudinary.com/dl1oaa2td/image/upload/v1771015372/Trending_zltjt4.png"
    },
    {
        bigText: "New Arrival",
        image:"https://res.cloudinary.com/dl1oaa2td/image/upload/v1771015369/NewArrival_d1ddmo.png"
    },
    {
        bigText: "Best sellers",
        image:"https://res.cloudinary.com/dl1oaa2td/image/upload/v1771015370/BestSeller_rzym8p.png"
    },
]

    return(
        <section className="min-h-screen ">
           <div className="grid 
                grid-cols-1 
                p-3
                sm:p-0
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-4">

                {slides.map((item,index) => (
                    <div
                    key={index}
                    className="relative 
                                h-[60vh] 
                                sm:h-[70vh] 
                                lg:h-[90vh] 
                                rounded-2xl 
                                overflow-hidden 
                                group"
                    >
                        <img
                            src={item.image}
                            alt="Product"
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500  shadow-lg"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>

                        <div className="flex flex-col gap-3 absolute bottom-5 left-5 text-white">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold">
                            {item.bigText}
                            </h2>

                            <button
                            className="h-9 sm:h-10 px-5 
                                        bg-orange-400 hover:bg-orange-600
                                        text-white rounded-full 
                                        shadow-md transition duration-300">
                            Shop Now
                            </button>
                        </div>
                    </div>
                ))}

                </div>


            
        </section>
    )
}