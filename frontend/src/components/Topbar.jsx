import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Topbar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="md:hidden flex items-center justify-between bg-white shadow px-4 py-3 relative">
            <span className="text-xl font-bold text-blue-700">📘 Study App</span>
            <button
                className="p-2 rounded hover:bg-blue-50 focus:outline-none"
                onClick={() => setOpen((o) => !o)}
                aria-label="Open navigation menu"
            >
                {/* Hamburger Icon */}
                <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {open && (
                <div className="absolute right-4 top-14 bg-white rounded-xl shadow-lg border border-blue-100 w-48 z-50 flex flex-col py-2 animate-fade-in">
                    <NavLink
                        to="/dashboard"
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                            `block text-gray-700 font-medium px-4 py-2 rounded transition
                            ${isActive ? "bg-blue-600 text-white shadow" : "hover:text-blue-700 hover:bg-blue-50"}`
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/planner"
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                            `block text-gray-700 font-medium px-4 py-2 rounded transition
                            ${isActive ? "bg-blue-600 text-white shadow" : "hover:text-blue-700 hover:bg-blue-50"}`
                        }
                    >
                        Planner
                    </NavLink>
                    <NavLink
                        to="/about"
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                            `block text-gray-700 font-medium px-4 py-2 rounded transition
                            ${isActive ? "bg-blue-600 text-white shadow" : "hover:text-blue-700 hover:bg-blue-50"}`
                        }
                    >
                        About
                    </NavLink>
                    <button
                        onClick={() => {
                            setOpen(false);
                            handleLogout();
                        }}
                        className="block bg-red-100 text-red-700 px-4 py-2 rounded font-semibold hover:bg-red-200 mt-2 mx-2"
                    >
                        Logout
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Topbar;