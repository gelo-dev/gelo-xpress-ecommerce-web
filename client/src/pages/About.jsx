import AboutUsSection from "../components/AboutUsComponents/aboutUs"
import StatsSection from "../components/AboutUsComponents/statisticsSection"
import MissionVisionSection from "../components/AboutUsComponents/missionVision"
import RatingsSections from "../components/AboutUsComponents/ratingsSection"

export default function AboutSection(){
    return(
        <section id="about" className="min-h-screen">
            <div className="flex flex-col items-center gap-5">
                    <h1 className="flex text-center text-5xl md:text-7xl font-extrabold text-orange-300">Built on Trust. Driven by Quality.</h1>
                    <div className="">
                        <AboutUsSection/>
                    </div>
                    <div>
                        <StatsSection/>
                    </div>
                    <div className="">
                        <MissionVisionSection/>
                    </div>
                    <div className=" w-full  overflow-hidden" >
                        <RatingsSections/>
                    </div>
                    
            </div>

        </section>
    )
}