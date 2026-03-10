import Reveal from "../animations/revealAnimation"

export default function AboutUsSection(){
    return(
        <section className="min-h-screen flex items-center py-10">
            <div className="container mx-auto px-3 lg:px-0 ">                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <Reveal delay={0.3}>
                        <div className="w-full h-87.5 sm:h-112.5 lg:h-150">
                            <img
                            src="https://res.cloudinary.com/dl1oaa2td/image/upload/v1771131666/warehouse1_kxnwff.jpg"
                            alt="GeloXpress Warehouse"
                            className="w-full h-full object-cover rounded-3xl shadow-xl"
                        />
                        </div>
                    </Reveal>
                    
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                            <Reveal>
                                <span className="relative inline-block">
                                    Welcome to
                                    <Reveal delay={0.1}>
                                        <span className="absolute left-0 -bottom-2 w-full h-2 bg-orange-300 -z-10"></span>
                                    </Reveal>
                                </span>{" "}
                            </Reveal>
                            <div className="flex justify-center lg:justify-start text-center lg:text-left">
                                <Reveal delay={0.2} >
                                    <span className="text-blue-800">Gelo</span>
                                </Reveal>   
                                <Reveal delay={0.3}>
                                    <span className="text-orange-400">Xpress</span>
                                </Reveal>   
                            </div> 
                        </h1>
                        <Reveal delay={0.4}>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Your one-stop online shop for everything you need from daily 
                                essentials and gadgets to trendy fashion and lifestyle products.
                            </p>
                        </Reveal>
                        <Reveal delay={0.5}>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                At GeloXpress, we believe shopping should be fast, simple, and enjoyable. 
                                Discover products across multiple categories and shop with confidence.
                            </p>

                        </Reveal>
                        <Reveal delay={0.6}>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                                Whether practical or special, GeloXpress delivers convenience, 
                                variety, and reliability all in one place.
                            </p>
                        </Reveal>
                            
                        <div>
                            <Reveal delay={0.7}>
                                <button
                                className="h-9 sm:h-10 px-5 md:px-10 
                                            bg-orange-400 hover:bg-orange-600
                                            text-white rounded-full 
                                            shadow-md transition duration-300">
                                    Shop Now
                                </button>
                            </Reveal>
                        
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}