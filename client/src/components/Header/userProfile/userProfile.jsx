

import { useState, useEffect } from "react";
import LoginSection from "../../LogInSignup/logInSection";
import SignUpSection from "../../LogInSignup/signUpSection";

export default function ProfileButtonSection() {
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    const [user, setUser] = useState(storedUser);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openLogIn, setOpenLogIn] = useState(false);
    const [userExist, setUserExist] = useState(false);

    // Toggle between Login and SignUp forms
    const changeSignUpForm = () => setUserExist(!userExist);

    // Handle body scroll when modal opens
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

    // Get initials from name
    const getInitials = (name) => {
        if (!name) return "";
        const words = name.trim().split(" ");
        const initials =
            words.length === 1
                ? words[0][0]
                : words[0][0] + words[words.length - 1][0];
        return initials.toUpperCase();
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        setOpenDropdown(false);
    };

    return (
        <section className="relative flex items-center gap-2 z-10">
            {/* Account Name Button */}
            <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className={`text-sm font-medium ${
                    user ? "text-blue-800" : "text-gray-700 hover:text-black"
                }`}
            >
                {user ? user.full_name : "Account"}
            </button>

            {/* Initials Circle */}
            <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="w-10 h-10 rounded-full border flex items-center justify-center"
            >
                {user ? getInitials(user.full_name) : "A"}
            </button>

            {/* Dropdown */}
            {openDropdown && (
                <div className="absolute right-0 top-12 w-44 bg-white border rounded shadow-md z-50">
                    {!user && (
                        <button
                            onClick={() => {
                                setOpenLogIn(true);
                                setOpenDropdown(false);
                            }}
                            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        >
                            Login
                        </button>
                    )}
                    {user && (
                        <button
                            onClick={handleLogout}
                            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    )}
                </div>
            )}

            {/* Login / SignUp Modal */}
            {openLogIn && !user && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Background Overlay */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setOpenLogIn(false)}
                    ></div>

                    {/* Modal */}
                    {userExist ? (
                        <div
                            className="relative bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <SignUpSection changeSignUpForm={changeSignUpForm} onLoginSuccess={(loggedUser) => {
                                setUser(loggedUser); // update parent state
                                setOpenLogIn(false); // close modal
                            }} />
                        </div>
                    ) : (
                        <div
                            className="relative bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <LoginSection changeSignUpForm={changeSignUpForm} onLoginSuccess={(loggedUser) => {
                                setUser(loggedUser); // update parent state
                                setOpenLogIn(false); // close modal
                            }} />
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}