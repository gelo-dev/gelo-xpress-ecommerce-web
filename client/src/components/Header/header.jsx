import HomeSection from "../../pages/Home";
import ShopSection from "../../pages/Shop";
import ContactSection from "../../pages/Contact";
import AboutSection from "../../pages/About";

export default function HeaderSection(){
    return(
        <section className="scroll-smooth">
  <div className="container mx-auto sm:px-6 md:px-10 lg:px-16">
    <nav className="fixed px-16 bg-sky-100 top-0 left-0 right-10 w-full h-16 grid grid-cols-3 items-center ">
      <div>LOGO</div>
      <div className="flex flex-wrap gap-6 md:gap-20 justify-center">
        <a href="#home">Home</a>
        <a href="#shop">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="flex justify-end gap-2">
        <button className="px-4 py-2 bg-amber-300 rounded">Login</button>
        <button className="px-4 py-2 bg-amber-300 rounded">Sign-up</button>
      </div>
    </nav>

        <div className="pt-16">
                  <HomeSection />
                <ShopSection />
                <AboutSection />
                <ContactSection />
        </div>
  
  </div>
</section>

    )
}