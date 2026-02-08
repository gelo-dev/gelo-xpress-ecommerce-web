import { useState } from "react";

export default function ProfileButtonSection() {

    const[open , setOpen]=useState(false);

        return (
            <div className="relative flex items-center gap-2 z-10">                
                            
                <button
                    onClick={() => setOpen(!open)}
                    className="text-sm font-medium text-gray-700 hover:text-black"
                >
                    Account
                </button>
                 <button
                    onClick={() => setOpen(!open)}
                    className="w-10 h-10 rounded-full outline-1 border
                            flex items-center justify-center "
                >
                    A
                </button>   

                {open && (
                    <div className="absolute right-0 top-12 w-44 bg-white border rounded shadow-md z-50">
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                        Login
                    </button>
                    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                        Register
                    </button>
                    </div>
                )}
            </div>
                
        );
    }
