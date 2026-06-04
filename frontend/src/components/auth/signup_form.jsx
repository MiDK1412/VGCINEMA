import { useState } from "react";
import { useAuth } from "../../contexts/auth_context";
import AuthInput from "./auth_input";

const SignupForm = ({ switchToLogin }) => {
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!email) newErrors.email = "Nhập email";
        else if (!/\S+@\S+\.\S+/.test(email))
        newErrors.email = "Email không hợp lệ";

        if (password.length < 6)
        newErrors.password = "Tối thiểu 6 ký tự";

        if (password !== confirm)
        newErrors.confirm = "Mật khẩu không khớp";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) return;

        setLoading(true);

        setTimeout(() => {
            login({ name: "New User", email });
            setLoading(false);
        }, 800);
    };
    return (
        <>
            <AuthInput
                placeholder="Email"
                type="email"
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
            <AuthInput
                type="password"
                placeholder="Xác nhận mật khẩu"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                error={errors.confirm}
            />
            <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 disabled:opacity-50"
            >
                {loading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
            <p className="text-center mt-4 text-gray-500">
                Đã có tài khoản?
                <span
                    onClick={switchToLogin}
                    className="text-red-600 ml-1 cursor-pointer hover:underline"
                >
                    Đăng nhập
                </span>
            </p>
        </>
    )
}

export default SignupForm;