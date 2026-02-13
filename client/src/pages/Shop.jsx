import MainCarouselSection from "../components/shopComponents/mainCarousel"
import DealsAndPromoSection from "../components/shopComponents/dealsAndPromos"

export default function ShopSection(){
    return(
        <section id="shop" className="h-[230vh]">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="flex text-center text-5xl md:text-7xl font-extrabold mt-5 text-orange-300">Your Favorites, All in One Place</h1>
                <p className=" text-center text-lg md:text-2xl font-light">
                    Discover curated collections of our most-loved products,handpicked to bring you style, 
                    innovation, and everyday essentials in one seamless experience.
                </p>
            </div>
            <div className="h-[75vh] rounded-2xl mt-5 md:mt-15">
                <MainCarouselSection/>
            </div>
            <div className="h-[75vh] rounded-2xl ">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="flex text-center text-5xl md:text-7xl font-extrabold mt-5 text-orange-300">Don’t Miss What’s Hot!</h1>
                    <p className=" text-center text-lg md:text-2xl font-light">
                    From exclusive promos and big sale items to fresh new arrivals and customer best sellers discover the products everyone’s talking about.</p>
                </div>
                <div className="mt-10">
                    <DealsAndPromoSection/>
                </div>
            </div>


            
        </section>
    )
}