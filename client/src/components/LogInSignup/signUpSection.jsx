import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { FaUserPlus } from "react-icons/fa";

export default function SignUpSection({changeSignUpForm}) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign up submitted");
    };

    return (
        <section className={`flex items-center justify-center px-4 ${changeSignUpForm ? "opacity-100":"opacity-0" }`}>
            <div className="w-full max-w-md rounded-3xl p-4 ">
                
                <div className="text-center mb-8">
                    <h2 className=" flex items-center justify-center gap-3 text-3xl font-bold text-orange-500">
                        <span>Create Account</span>  <FaUserPlus className="w-7 h-7"/>
                    </h2>
                    <p className="text-gray-500 mt-2">Sign up to get started</p>
                </div>

                
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                
                    <div className="flex flex-col">
                        <label className="text-sm mb-1 text-gray-600">Full Name</label>
                        <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                
                    <div className="flex flex-col">
                        <label className="text-sm mb-1 text-gray-600">Email</label>
                        <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                
                    <div className="flex flex-col relative">
                        <label className="text-sm mb-1 text-gray-600">Password</label>
                        <input
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="Enter your password"
                        className="border rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-9.5"
                        >
                        {showPassword ? (
                            <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                            <EyeIcon className="h-5 w-5 text-gray-500" />
                        )}
                        </button>
                    </div>

            
                    <div className="flex flex-col relative">
                        <label className="text-sm mb-1 text-gray-600">Confirm Password</label>
                        <input
                        type={showConfirm ? "text" : "password"}
                        required
                        placeholder="Confirm your password"
                        className="border rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-9.5"
                        >
                        {showConfirm ? (
                            <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                        ) : (
                            <EyeIcon className="h-5 w-5 text-gray-500" />
                        )}
                        </button>
                    </div>

                
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input type="checkbox" required />
                        I agree to the <a href="#" className="text-orange-500 hover:underline">Terms & Conditions</a>
                    </label>

                
                    <button
                        type="submit"
                        className="bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
                    >
                        Sign Up
                    </button>
                </form>

                
                <p className="text-center text-sm mt-6 text-gray-500">
                    Already have an account?{" "}
                    <a onClick={changeSignUpForm} className="text-orange-500 font-semibold hover:underline">
                        Login
                    </a>
                </p>
            </div>
        </section>
    );
}

