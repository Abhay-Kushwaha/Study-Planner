import { useState } from "react";
import axios from "../services/api"; // your axios instance
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("/auth/login", { email, password });
            localStorage.setItem("token", res.data.access_token);
            navigate("/dashboard"); // redirect after login
        } catch (err) {
            alert("Login failed: " + err.response?.data?.detail);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <input
                    type="email"
                    className="mb-4 p-2 w-full border rounded"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="mb-4 p-2 w-full border rounded"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded w-full"
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
}
