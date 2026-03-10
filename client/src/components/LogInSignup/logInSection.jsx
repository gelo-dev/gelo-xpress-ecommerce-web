import { useState } from "react";
// import axiosInstance from "../../api/api";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function LoginSection( {changeSignUpForm , onLoginSuccess }) {
const [showPassword, setShowPassword] = useState(false);
 const [email, setEmail] = useState("");           // <-- added
  const [password, setPassword] = useState(""); 

const handleSubmit = async (e) => {
    e.preventDefault();
        try {
            const response = await axiosInstance.post('/login', {
                email,
                password
            });

            // console.log("Login successful:", response.data);
             const { token, user } = response.data;
            localStorage.setItem("token", token);

            // // store user info safely
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            console.log("Login successful:", user);
             if (onLoginSuccess) {
            onLoginSuccess(user);
            }
             


        } catch (error) {
            console.error(
                "Login failed:",
                error.response?.data || error.message
            );
        }
};

    return (
        <section className={`flex items-center justify-center  px-4 ${changeSignUpForm ? "opacity-100":"opacity-0" }`}>
        
            <div className="w-full max-w-md  rounded-3xl p-4">
                
            
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-orange-500">
                        Welcome Back!
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Login to your account
                    </p>
                </div>

                
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                
                
                <div className="flex flex-col">
                    <label className="text-sm mb-1 text-gray-600">
                        Email
                    </label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                </div>

                
                <div className="flex flex-col relative">
                    <label className="text-sm mb-1 text-gray-600">
                    Password
                    </label>
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

                
                <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                    </label>

                    <a href="#" className="text-orange-500 hover:underline">
                    Forgot password?
                    </a>
                </div>

            
                <button
                    type="submit"
                    className="bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
                >
                    Login
                </button>
                </form>

                <p className="text-center text-sm mt-6 text-gray-500">
                    Don’t have an account?{" "}
                    <a onClick={changeSignUpForm} className="text-orange-500 font-semibold hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </section>
    );
}