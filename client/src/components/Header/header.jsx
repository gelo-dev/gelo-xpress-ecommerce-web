import { 
  HomeIcon, 
  ShoppingBagIcon, 
  InformationCircleIcon, 
  PhoneIcon,
  ShoppingCartIcon,
  UserIcon
} from '@heroicons/react/24/outline'
import Reveal from '../animations/revealAnimation';


import FooterSection from '../Footer/footerSection';
import ProfileButtonSection from './userProfile/userProfile';
import HomeSection from "../../pages/Home";
import ShopSection from "../../pages/Shop";
import ContactSection from "../../pages/Contact";
import AboutSection from "../../pages/About";

export default function HeaderSection(){
    return(
        <section className="scroll-smooth">
          <div className="container mx-auto sm:px-6 md:px-10 lg:px-16">
            <nav className="grid fixed top-0 left-0 w-full h-16
                px-16 bg-white
                grid-cols- md:grid-cols-3 items-center
                z-50">
              <Reveal delay={0.2}>
                <div
                className="h-15 w-55 md:w-40 bg-no-repeat bg-contain bg-center"
                style={{
                backgroundImage: `url("https://res.cloudinary.com/dl1oaa2td/image/upload/v1770411099/GeloExpressLogo_cktzjw.png")`
                }}
              ></div>
              </Reveal>    
              

              <div className="hidden md:flex flex-wrap gap-6 md:gap-20 justify-center">
                <Reveal delay={0.3}>
                  <a href="#home" className='text-orange-500'>Home</a>
                </Reveal>
                <Reveal delay={0.4}>
                  <a href="#shop" className='text-orange-500'>Shop</a>
                </Reveal>
                <Reveal delay={0.5}>
                  <a href="#about" className='text-orange-500'>About-Us</a>
                </Reveal>
                <Reveal delay={0.6}>
                  <a href="#contact" className='text-orange-500'>Contact</a>
                </Reveal>
                
                
                
                
              </div>
                <div className="hidden md:flex justify-end gap-7 items-center">
                  <Reveal delay={0.7}>
                    <ShoppingCartIcon className='h-6 w-6 hover:text-amber-500' />
                  </Reveal>
                  <Reveal delay={0.8}>
                    <ProfileButtonSection/>
                  </Reveal>
                
               
                
                
              </div>
            </nav>

            <div className="pt-5 md:pt-25">
              <Reveal delay={0.4}>
                  <HomeSection />
              </Reveal>
              
                    
                    <ShopSection />
                    <AboutSection />
                    <ContactSection />
                    
            </div>
                <FooterSection/>
          </div>



    
            <div className="fixed bottom-0 left-0 w-full h-16 bg-white border-t
                            flex justify-around items-center
                            md:hidden z-50">

                <a href="#home" className="flex flex-col items-center text-orange-500 text-xs">
                  <HomeIcon className="h-5 w-5" />
                  <span>Home</span>
                </a>

                <a href="#shop" className="flex flex-col items-center text-orange-500 text-xs">
                  <ShoppingBagIcon className="h-5 w-5" />
                  <span>Shop</span>
                </a>

                <a href="#about" className="flex flex-col items-center text-orange-500 text-xs">
                  <InformationCircleIcon className="h-5 w-5" />
                  <span>About</span>
                </a>

                <a href="#contact" className="flex flex-col items-center text-orange-500 text-xs">
                  <PhoneIcon className="h-5 w-5" />
                  <span>Contact</span>
                </a>

                <a href="#cart" className="flex flex-col items-center text-orange-500 text-xs">
                  <ShoppingCartIcon className="h-5 w-5" />
                  <span>Cart</span>
                </a>

                <a href="#profile" className="flex flex-col items-center text-orange-500 text-xs">
                  <UserIcon className="h-5 w-5" />
                  <span>Profile</span>
                </a>

            </div>


        </section>

    )
}