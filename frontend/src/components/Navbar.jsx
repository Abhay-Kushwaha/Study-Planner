// components/Navbar.js

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md px-4 py-3 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-blue-700 flex items-center gap-2">
                    <span role="img" aria-label="logo">🚀</span> Study Planner
                </Link>
                <button
                    className="md:hidden p-2 rounded hover:bg-blue-50 focus:outline-none"
                    onClick={() => setOpen((o) => !o)}
                    aria-label="Toggle navigation"
                >
                    <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className={`flex-col md:flex-row md:flex items-center gap-4 md:gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none z-50 transition-all duration-200 ${open ? 'flex' : 'hidden md:flex'}`}>
                    <NavLink
                        to="/"
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                            `block px-4 py-2 md:px-0 md:py-0 text-gray-700 font-medium hover:text-blue-700 transition ${isActive ? "text-blue-700 font-semibold" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/services"
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                            `block px-4 py-2 md:px-0 md:py-0 text-gray-700 font-medium hover:text-blue-700 transition ${isActive ? "text-blue-700 font-semibold" : ""}`
                        }
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/signup"
                        onClick={() => setOpen(false)}
                        className="block px-4 py-2 md:px-0 md:py-0"
                    >
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Signup</span>
                    </NavLink>
                    <NavLink
                        to="/login"
                        onClick={() => setOpen(false)}
                        className="block mt-2 md:mt-0"
                    >
                        <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
                            Login
                        </button>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
