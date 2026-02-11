import { useEffect,useState } from "react"

export default function HomeSection(){

    const homeImage = [
        {
            imageUrl: "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770614869/32d444b0-8e9b-486d-a901-60972c92943b_u8dhvd.png",
            bigText:"Smart Living. Simplified",
            longText:"Our modern smartwatch combines sleek design with powerful features to keep you connected and in control. Track your health, manage your day, and stay ahead — all from your wrist."

        },
        {
            imageUrl: "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770614561/Man_sfu2vb.png",
            bigText:"Wear the Season.",
            longText:"Designed with lightweight, breathable fabric, our summer shirts keep you cool and effortlessly stylish all day long. Made for couples who love comfort and connection, this collection lets you create memories in style."

        },
        
        {
            imageUrl: "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770616047/leathershoes_rnrtcb.png",
            bigText:"Details That Define You",
            longText:"Crafted from premium materials, our classic shoes and leather belts bring timeless elegance to any outfit. Every detail is designed to elevate your confidence and complete your look with sophistication."

        },
        
    ]
    
    const[ currentIndex , setCurrentIndex ]=useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prev)=>
                prev === homeImage.length - 1 ? 0 : prev + 1
            );
        },7000)
        return ()=> clearInterval(interval)
    },[homeImage.length] )

    const test = ()=>{
        alert("button is ok")
    }

        return(
            <section id="home" className="min-h-screen ">
                
                <div className="relative h-screen overflow-hidden">
                    {homeImage.map((item,index)=>(
                        <div
                        key={index}
                        className={`absolute inset-0 h-[95vh] bg-cover bg-center rounded-xl md:rounded-4xl transition-opacity duration-1000 ${
                            index === currentIndex ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                        >
                            <div className="flex flex-col gap-7 p-5">   
                                <div className="flex flex-col h-[70vh] gap-3">
                                <div className="mt-auto">
                                    <span className="justify-center md:ml-5 text-6xl md:text-7xl text-white font-extrabold">
                                    {item.bigText}
                                    </span>
                                
                                </div>
                                <div className="w-[80] md:w-[100vh] flex ">
                                    <p className="ml-0 md:ml-5 text-md md:text-xl text-white font-light">
                                        {item.longText}
                                    </p>
                                </div>
                                </div>
                                <div className="flex w-[20vh] justify-center">
                                    <button
                                        onClick={()=>test()}
                                        className="h-12 w-32 bg-orange-400 hover:bg-orange-700
                                                text-white font-semibold rounded-full 
                                                shadow-md transition duration-300 ease-in-out">
                                        Shop Now
                                    </button>
                                </div>

                            </div>
                            
                
                        </div>

                        
                    ))}
                            
                </div>
                
                
            </section>
        )
}