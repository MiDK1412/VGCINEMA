import { useState } from "react";
import { useAuth } from "../../contexts/auth_context";
import AuthInput from "./auth_input";

const LoginForm = ({ switchToSignup }) => {
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!email) newErrors.email = "Vui lòng nhập email";
        else if (!/\S+@\S+\.\S+/.test(email))
        newErrors.email = "Email không hợp lệ";

        if (!password) newErrors.password = "Vui lòng nhập mật khẩu";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;

        setLoading(true);

        //fake API delay
        setTimeout(() => {
            login({ name: "Mi Duong", email });
            setLoading(false);
        }, 800);
    };
    
    return (
        <>
            <AuthInput
                type="email"
                placeholder="Email"
                value={email}
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
            />

            <AuthInput
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
            />
            <button 
                className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 disabled:opacity-50"
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
            <p className="text-center mt-4 text-gray-500">
                Chưa có tài khoản?
                <span
                    onClick={switchToSignup}
                    className="text-red-600 ml-1 cursor-pointer hover:underline"
                >
                    Đăng ký
                </span>
            </p>
        </>
    )
}

export default LoginForm;