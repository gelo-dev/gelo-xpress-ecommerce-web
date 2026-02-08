import ImageCarousel from "../components/shopComponents/mainCarousel"

export default function ShopSection(){
    return(
        <section id="shop" className="min-h-screen">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="flex justify-center text-7xl font-extrabold mt-5 text-orange-400">Your Favorites, All in One Place</h1>
                <p className="justify-center text-xl font-light">Discover curated collections of our most-loved products,handpicked to bring you style, 
                    innovation, and everyday essentials in one seamless experience.</p>
            </div>
            <div className="h-[250vh] rounded-2xl mt-15">
                <ImageCarousel/>
            </div>

            
        </section>
    )
}