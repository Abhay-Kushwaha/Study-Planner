import React from 'react';
import { FaRegLightbulb, FaChartLine, FaUserFriends, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const services = [
    {
        title: "Personalized Study Plans",
        description: "Get AI-powered study plans tailored to your subjects, goals, and exam dates.",
        icon: <FaRegLightbulb className="text-4xl text-indigo-500 mb-4" />,
    },
    {
        title: "Progress Tracking",
        description: "Monitor your daily and weekly progress with interactive charts and reminders.",
        icon: <FaChartLine className="text-4xl text-green-500 mb-4" />,
    },
    {
        title: "Easy Scheduling",
        description: "Effortlessly schedule study sessions and manage your calendar with a user-friendly interface.",
        icon: <FaCalendarAlt className="text-4xl text-blue-500 mb-4" />,
    },
    {
        title: "Goal Achievement",
        description: "Set academic goals and celebrate your achievements with badges and rewards.",
        icon: <FaCheckCircle className="text-4xl text-yellow-400 mb-4" />,
    },
];

const Services = () => {
    return (
        <div>
            <Navbar />
            <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-white min-h-screen">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center mb-10 text-indigo-700 tracking-tight drop-shadow-lg">
                        Our Services
                    </h2>
                    <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                        We empower students to achieve their academic goals with smart planning, progress tracking, and a vibrant community. Explore our core services below!
                    </p>
                    <div className="flex flex-wrap justify-center gap-10">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 rounded-2xl shadow-xl w-full sm:w-80 flex flex-col items-center text-center border border-indigo-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {service.icon}
                                <h3 className="text-2xl font-semibold mb-3 text-indigo-800">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
