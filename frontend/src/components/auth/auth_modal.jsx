import { useState } from "react";
import { useAuth } from "../../contexts/auth_context";

import LoginForm from "./login_form"
import SignupForm from "./signup_form"

const AuthModal = () => {
    const { showAuthModal, closeAuth, login } = useAuth();
    const [mode, setMode] = useState("login");

    if (!showAuthModal) return null;

    const handleSubmit = () => {
        const fakeUser = {
        name: "Mi Duong",
        email: "test@gmail.com",
        };

        login(fakeUser);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* overlay */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick = {closeAuth} 
            />
            
            {/* modal */}
            <div className="relative bg-white rounded shadow-xl w-full max-w-md p-8 z-10 text-gray-500">
                <button
                    className="absolute top-3 right-4 text-gray-500"
                    onClick = {closeAuth}
                >
                    ✕
                </button>
                {/* Tabs */}
                <div className="flex mb-6 border-b">
                <button
                    onClick={() => setMode("login")}
                    className={`flex-1 pb-2 font-semibold ${
                    mode === "login"
                        ? "border-b-2 border-red-600 text-red-600"
                        : "text-gray-400"
                    }`}
                >
                    Đăng nhập
                </button>

                <button
                    onClick={() => setMode("signup")}
                    className={`flex-1 pb-2 font-semibold ${
                    mode === "signup"
                        ? "border-b-2 border-red-600 text-red-600"
                        : "text-gray-400"
                    }`}
                >
                    Đăng ký
                </button>
                </div>
                <div>
                    {
                        mode === "login" ? (
                            <LoginForm switchToSignup={() => setMode("signup")}/>
                        ) : (
                            <SignupForm switchToLogin={() => setMode("login")}/>
                        )
                    }
                </div>               
            </div>
        </div>
    )
}

export default AuthModal;