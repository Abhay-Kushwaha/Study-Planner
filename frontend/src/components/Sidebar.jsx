import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <aside className="h-screen w-64 bg-white shadow-md flex flex-col justify-between py-8 px-4">
            {/* Top: Logo + Navigation */}
            <div>
                <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">
                    📘 Study App
                </h2>
                <nav className="flex flex-col gap-4">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `text-gray-700 font-medium px-2 py-2 rounded transition
                            ${isActive ? "bg-blue-600 text-white shadow" : "hover:text-blue-700 hover:bg-blue-50"}`
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/planner"
                        className={({ isActive }) =>
                            `text-gray-700 font-medium px-2 py-2 rounded transition
                            ${isActive ? "bg-blue-600 text-white shadow" : "hover:text-blue-700 hover:bg-blue-50"}`
                        }
                    >
                        Planner
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-gray-700 font-medium px-2 py-2 rounded transition
                            ${isActive ? "bg-blue-600 text-white shadow" : "hover:text-blue-700 hover:bg-blue-50"}`
                        }
                    >
                        About
                    </NavLink>
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
