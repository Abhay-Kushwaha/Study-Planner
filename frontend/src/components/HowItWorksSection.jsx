import React from 'react';

const steps = [
    {
        title: 'Input Your Subjects',
        description: 'Add all the subjects you need to study for.',
    },
    {
        title: 'Set Your Exam Date',
        description: 'Specify when your exams are scheduled.',
    },
    {
        title: 'Generate Plan',
        description: 'Receive a customized study plan instantly.',
    },
];

const HowItWorksSection = () => (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-gray-800 tracking-tight">
                How It Works
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-2/3 md:w-1/3 px-4 mb-8 transition-transform transform hover:-translate-y-2"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-xl h-full flex flex-col items-center text-center border border-indigo-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-500 text-white text-2xl font-bold mb-5 shadow-lg">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-indigo-700">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default HowItWorksSection;
