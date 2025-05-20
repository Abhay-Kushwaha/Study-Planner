import { useState } from "react";
import axios from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("/auth/login", { email, password });
            localStorage.setItem("token", res.data.access_token);
            navigate("/dashboard");
        } catch (err) {
            alert("Login failed: " + err.response?.data?.detail);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-white">
            <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md flex flex-col items-center border border-indigo-100">
                <h2 className="text-3xl font-extrabold mb-6 text-indigo-700 tracking-tight">Login</h2>
                <input
                    type="email"
                    className="mb-4 p-3 w-full border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                />
                <input
                    type="password"
                    className="mb-6 p-3 w-full border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg w-full font-semibold shadow-md transition-all duration-200"
                    onClick={handleLogin}
                >
                    Login
                </button>
                <div className="mt-4 text-sm text-gray-500">
                    Don't have an account?{" "}
                    <span
                        className="text-indigo-600 hover:underline cursor-pointer"
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </span>
                </div>
            </div>
        </div>
    );
}
