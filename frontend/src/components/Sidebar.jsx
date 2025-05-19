import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <aside className="h-screen w-64 bg-white shadow-md flex flex-col justify-between py-8 px-4">
            {/* Top: Logo + Navigation */}
            <div>
                <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">
                    📘 Study App
                </h2>
                <nav className="flex flex-col gap-4">
                    <Link to="/dashboard" className="text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded hover:bg-blue-50 transition">
                        Dashboard
                    </Link>
                    <Link to="/planner" className="text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded hover:bg-blue-50 transition">
                        Planner
                    </Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium px-2 py-2 rounded hover:bg-blue-50 transition">
                        About
                    </Link>
                </nav>
            </div>

            {/* Bottom: Logout */}
            <div>
                <button
                    onClick={handleLogout}
                    className="bg-red-100 text-red-700 px-4 py-2 rounded hover:bg-red-200 transition font-semibold w-full"
                >
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
