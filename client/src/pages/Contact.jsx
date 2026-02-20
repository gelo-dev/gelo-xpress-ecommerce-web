import MessageUsSection from "../components/contactComponents/messageUs"
import ContactInformationSection from "../components/contactComponents/contactInformation"

export default function ContactSection(){
    return(
        <section id="contact" className="min-h-screen">
            <div className="flex justify-center">
                <h1 className="flex text-center text-5xl md:text-7xl font-extrabold text-orange-300">Get in Touch Today.</h1>
            </div>
            <div className="flex flex-col-reverse md:flex-row mt-10 items-center justify-center ">
                <div className=" w-full p-4 md:p-0  md:w-1/2">
                    <ContactInformationSection/>
                </div>
                <div className=" p-4 md:p-0 w-full md:w-1/2">
                    <MessageUsSection/>
                </div>

            </div>
            
        </section>
    )
}