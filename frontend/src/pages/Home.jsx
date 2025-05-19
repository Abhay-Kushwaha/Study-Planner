import React, { useState } from "react";
import { generateStudyPlan } from "../services/api";

const Home = () => {
  const [subjects, setSubjects] = useState([{ name: "", chapters: "", knowledge: "" }]);
  const [examDate, setExamDate] = useState("");
  const [plan, setPlan] = useState([]);

  const handleAddSubject = () => {
    setSubjects([...subjects, { name: "", chapters: "", knowledge: "" }]);
  };

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  const handleSubmit = async () => {
    const response = await generateStudyPlan({ subjects, examDate });
    setPlan(response.plan || []);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
    
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          📚 Smart Study Planner
        </h1>

        <div className="space-y-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center"
            >
              <input
                type="text"
                placeholder="Subject"
                value={subject.name}
                onChange={(e) =>
                  handleSubjectChange(index, "name", e.target.value)
                }
                className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                placeholder="Chapters"
                value={subject.chapters}
                onChange={(e) =>
                  handleSubjectChange(index, "chapters", e.target.value)
                }
                className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                placeholder="% Knowledge"
                value={subject.knowledge}
                onChange={(e) =>
                  handleSubjectChange(index, "knowledge", e.target.value)
                }
                className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleAddSubject}
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ➕ Add Another Subject
          </button>
          <input
            type="date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Generate Study Plan 🧠
        </button>

        {plan.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Study Plan</h2>
            <ul className="space-y-2 list-disc pl-6">
              {plan.map((item, idx) => (
                <li key={idx} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
