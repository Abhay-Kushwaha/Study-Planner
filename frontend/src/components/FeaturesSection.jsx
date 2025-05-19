import React from 'react';
import { FaRegLightbulb, FaChartLine, FaUserFriends } from 'react-icons/fa';

const features = [
    {
        title: 'Personalized Plans',
        description: 'Generate study plans tailored to your subjects and exam dates.',
        icon: <FaRegLightbulb className="text-4xl text-indigo-500 mb-4" />,
    },
    {
        title: 'Progress Tracking',
        description: 'Monitor your study progress and stay on track.',
        icon: <FaChartLine className="text-4xl text-green-500 mb-4" />,
    },
    {
        title: 'Easy to Use',
        description: 'User-friendly interface designed for students.',
        icon: <FaUserFriends className="text-4xl text-pink-500 mb-4" />,
    },
];

const FeaturesSection = () => (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-800 tracking-tight">
                Features
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-2/3 md:w-1/3 px-4 mb-8 transition-transform transform hover:-translate-y-2"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col items-center text-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                            {feature.icon}
                            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default FeaturesSection;
