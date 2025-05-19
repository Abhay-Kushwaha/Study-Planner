import React from 'react';

const About = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-4xl">📚</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 tracking-tight">
          About <span className="text-indigo-500">Study Planner</span>
        </h1>
      </div>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
        <span className="font-semibold text-blue-700">Study Planner</span> is your smart assistant for stress-free exam prep.
        Generate a personalized plan based on your knowledge level and subjects, and stay focused with a structured schedule.
      </p>
      <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-inner mb-10">
        <h2 className="text-xl font-bold text-indigo-600 mb-4">✨ How to Use</h2>
        <ul className="space-y-4 text-gray-800 list-disc text-left">
          <li>
            <span className="font-semibold text-blue-600">Planner:</span> Add your exam date, subjects, number of chapters, and your current knowledge percentage. Then click <span className="font-semibold">"Generate Plan"</span> to build your custom study timeline.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Save Plan:</span> Once your plan is generated, hit <span className="font-semibold">"Save Plan"</span> to store it for later access.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Dashboard:</span> View saved study plans as clean, structured cards. You can <span className="font-semibold">open</span> any plan or <span className="font-semibold">delete</span> ones you don’t need.
          </li>
          <li>
            <span className="font-semibold text-blue-600">Logout:</span> Use the logout button in the sidebar to safely end your session.
          </li>
        </ul>
      </div>
      <div className="text-center text-gray-600 text-sm sm:text-base">
        <p>
          Created with <span className="text-pink-500">❤️</span> by
          <span className="font-semibold text-indigo-600 mx-1">Abhay</span> &
          <span className="font-semibold text-indigo-600 ml-1">Akanshu</span>
        </p>
      </div>
    </div>
  );
};

export default About;
