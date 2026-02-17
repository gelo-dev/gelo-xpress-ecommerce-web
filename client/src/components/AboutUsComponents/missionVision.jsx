export default function MissionVisionSection(){
    return(
        <section className="py-5 lg:py-25">
            <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">

                <div className="bg-orange-300 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        MISSION
                    </h2>
                    <p className="text-white text-base md:text-lg leading-relaxed">
                        To provide a seamless, reliable online shopping experience with a wide variety of quality products, fast delivery, and exceptional service worldwide.
                    </p>
                </div>
                <div className="bg-blue-800 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        VISION
                    </h2>
                    <p className="text-white text-base md:text-lg leading-relaxed">
                        To become the go-to global e-commerce destination where convenience, variety, and customer satisfaction come first.
                    </p>
                </div>

            </div>
        </section>

    )
}