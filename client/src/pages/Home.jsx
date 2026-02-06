import { useEffect,useState } from "react"

export default function HomeSection(){

    const homeImage = [
        {
            imageUrl: "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770413789/HomeImage1_ips3lp.jpg",
            bigText:"Wear the Season. Feel the Moment",
            longText:"Designed with lightweight, breathable fabric, our summer shirts keep you cool and effortlessly stylish all day long. Made for couples who love comfort and connection, this collection lets you create memories in style."

        },
        {
            imageUrl: "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770406386/HomeImage3_qnzfes.jpg",
            bigText:"Smart Living. Simplified",
            longText:"Our modern smartwatch combines sleek design with powerful features to keep you connected and in control. Track your health, manage your day, and stay ahead — all from your wrist."

        },
        
        {
            imageUrl: "https://res.cloudinary.com/dl1oaa2td/image/upload/v1770406387/HomeImage2_vu07mh.jpg",
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
        },4000)
        return ()=> clearInterval(interval)
    },[homeImage.length] )

        return(
            <section id="home" className="min-h-screen">
                
                <div className="relative h-screen overflow-hidden">
                    {homeImage.map((item,index)=>(
                        <div
                        key={index}
                        className={`absolute inset-0 h-screen bg-cover bg-center transition-opacity duration-1000 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                        >
                            <div className="flex flex-col h-[70vh] gap-3">
                                <div className="mt-auto">
                                    <span className="ml-5 text-7xl text-white font-extrabold">
                                    {item.bigText}
                                    </span>
                                   
                                </div>
                                <div className="w-[100vh] flex">
                                    <span className="ml-5 text-xl text-white font-light">
                                        {item.longText}
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                
                
            </section>
        )
}