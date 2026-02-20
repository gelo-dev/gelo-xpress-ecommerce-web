import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="  text-gray-500 mt-10">
            <div className="max-w-8xl mx-auto px-6  py-12">

            
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                
                <div>
                    <h2 className="text-3xl font-bold text-orange-300 mb-4">
                    Gelo <span className="text-blue-800">Xpress</span>
                    </h2>
                    <p className="text-md leading-relaxed">
                    Your one-stop online shop for essentials, gadgets, fashion,
                    and lifestyle products. Fast. Simple. Reliable.
                    </p>
                </div>

                
                <div>
                    <h3 className="text-orange-300 font-semibold mb-4">Shop</h3>
                    <ul className="space-y-2 text-sm">
                    <li className="hover:text-orange-400 cursor-pointer">All Products</li>
                    <li className="hover:text-orange-400 cursor-pointer">New Arrivals</li>
                    <li className="hover:text-orange-400 cursor-pointer">Best Sellers</li>
                    <li className="hover:text-orange-400 cursor-pointer">Sale</li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-orange-300 font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                    <li className="hover:text-orange-400 cursor-pointer">Contact Us</li>
                    <li className="hover:text-orange-400 cursor-pointer">FAQs</li>
                    <li className="hover:text-orange-400 cursor-pointer">Shipping Policy</li>
                    <li className="hover:text-orange-400 cursor-pointer">Returns</li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-orange-300 font-semibold mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                    <div className="bg-blue-700 text-white p-3 rounded-full hover:bg-orange-400 transition cursor-pointer">
                        <FaFacebookF />
                    </div>
                    <div className="bg-red-300 text-white p-3 rounded-full hover:bg-orange-400 transition cursor-pointer">
                        <FaInstagram />
                    </div>
                    <div className="bg-black text-white p-3 rounded-full hover:bg-orange-400 transition cursor-pointer">
                        <FaXTwitter />
                    </div>
                    </div>
                </div>

                </div>

                
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm font-bold">
                © {new Date().getFullYear()} GeloXpress. All rights reserved.
                </div>

            </div>
        </footer>
    );
}