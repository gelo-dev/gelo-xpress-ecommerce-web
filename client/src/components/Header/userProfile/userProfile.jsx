import { useState,useEffect } from "react";
import LoginSection from "../../LogInSignup/logInSection";
import SignUpSection from "../../LogInSignup/signUpSection";

export default function ProfileButtonSection() {
    const[openLogIn ,setOpenLogIn]= useState(false)
    const[userExist , setUserExist] = useState(false)

    const changeSignUpForm = ()=>{
            setUserExist(!userExist)
    }

    useEffect(() => {
        if (openLogIn) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openLogIn]);

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
                        <button onClick={()=> setOpenLogIn(true)} className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                            Login
                        </button>
                        
                    </div>
                )}
                
                {openLogIn && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">

                        
                        <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => {setOpenLogIn(false) ; setOpen(!open)}}
                        ></div>

                        
                        {userExist ? (
                            <div
                            className={`relative bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md ${userExist ? "opacity-100":"opacity-0" }`}
                            onClick={(e) => e.stopPropagation()}
                            >
                                <SignUpSection changeSignUpForm={changeSignUpForm} />
                            </div>
                        ):(
                            <div
                            className={`relative bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md ${!userExist ? "opacity-100":"opacity-0" }`}
                            onClick={(e) => e.stopPropagation()}
                            >
                                <LoginSection changeSignUpForm={changeSignUpForm} />
                            </div>
                        )}
                        

                    </div>
                )}
            </div>
                
        );
    }
