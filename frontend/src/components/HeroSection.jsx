import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-24 relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white bg-opacity-10 rounded-full blur-2xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-white bg-opacity-10 rounded-full blur-2xl -z-10 animate-pulse"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
                    Ace Your Exams with <span className="text-yellow-300">Study Planner</span>
                </h1>
                <p className="text-lg md:text-2xl mb-10 font-medium animate-fade-in delay-100">
                    Organize your study schedule effortlessly and achieve your academic goals.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        className="bg-yellow-300 text-indigo-900 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-200 hover:scale-105 transition-all duration-200"
                        onClick={() => navigate('/signup')}
                    >
                        Sign Up
                    </button>
                    <button
                        className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-50 hover:scale-105 transition-all duration-200"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </button>
                </div>
                <a
                    href="#features"
                    className="inline-block mt-10 text-white/80 hover:text-white underline underline-offset-4 transition"
                >
                    Learn more about the features ↓
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
