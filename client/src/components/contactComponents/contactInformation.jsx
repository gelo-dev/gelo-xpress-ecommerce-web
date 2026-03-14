import {
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Reveal from "../animations/revealAnimation";

export default function ContactInfoSection() {
    return (
        <section className="py-16 px-2 md:px-5 bg-white">
            <div className="max-w-6xl mx-auto">

            
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <Reveal>
                            <p className="text-gray-600 leading-relaxed">
                            At <span className="font-medium text-black">GeloXpress</span>, 
                            your satisfaction matters to us.
                            Whether it’s about an order, a product inquiry, or a partnership opportunity,
                            we’re always happy to assist. Send us a message and let’s connect.
                            </p>
                    </Reveal>
                        
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                <Reveal delay={0.1}>
                    <div className=" flex flex-col justify-center items-center ">
                        <PhoneIcon className="w-8 h-8 text-orange-500 mb-4" />
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600 text-sm">+63 912-345-6789</p>
                    </div>
                </Reveal>


                <Reveal delay={0.2}>
                    <div className="flex flex-col justify-center items-center">
                        <EnvelopeIcon className="w-8 h-8 text-orange-500 mb-4" />
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-gray-600 text-sm">support@geloxpress.com</p>
                    </div>

                </Reveal>

                <Reveal  delay={0.3}>
                    <div className="flex flex-col justify-center items-center">
                        <ClockIcon className="w-8 h-8 text-orange-500 mb-4" />
                        <h3 className="font-semibold mb-2">Business Hours</h3>
                        <p className="text-gray-600 text-sm">Mon - Sat</p>
                        <p className="text-gray-600 text-sm">9:00 AM - 6:00 PM</p>
                    </div>
                </Reveal>

                <Reveal  delay={0.4}>
                    <div className="flex flex-col justify-center items-center">
                        <MapPinIcon className="w-8 h-8 text-orange-500 mb-4" />
                        <h3 className="font-semibold mb-2">Address</h3>
                        <p className="text-gray-600 text-sm">
                        Cavite, Philippines
                        </p>
                    </div>

                </Reveal>
                

                
                

                
                

                
                

                </div>
            </div>
        </section>
    );
}