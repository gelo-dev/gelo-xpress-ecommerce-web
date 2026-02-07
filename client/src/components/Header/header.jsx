import {ShoppingCartIcon} from '@heroicons/react/24/outline';
import HomeSection from "../../pages/Home";
import ShopSection from "../../pages/Shop";
import ContactSection from "../../pages/Contact";
import AboutSection from "../../pages/About";

export default function HeaderSection(){
    return(
        <section className="scroll-smooth">
  <div className="container mx-auto sm:px-6 md:px-10 lg:px-16">
    <nav className="fixed px-16 bg-white top-0 left-0 right-10 w-full h-16 grid grid-cols-3 items-center ">
     <div
  className="h-15 w-40 bg-no-repeat bg-contain bg-center"
  style={{
    backgroundImage: `url("https://res.cloudinary.com/dl1oaa2td/image/upload/v1770411099/GeloExpressLogo_cktzjw.png")`
  }}
></div>

      <div className="flex flex-wrap gap-6 md:gap-20 justify-center">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex justify-end gap-5 items-center">
        
        <ShoppingCartIcon className='h-6 w-6 hover:text-amber-500' />
        <div className='flex gap-2'>
          <button className="px-4 py-2 bg-green-400 hover:bg-green-600 rounded text-white hover:font-bold">Login</button>
          <button className="px-4 py-2 text-orange-500 rounded  hover:bg-orange-600 hover:text-white hover:font-bold font-normal ">Sign-up</button>
        </div>
        
      </div>
    </nav>

        <div className="pt-20">
                <HomeSection />
                <ShopSection />
                <AboutSection />
                <ContactSection />
        </div>
  
  </div>
</section>

    )
}