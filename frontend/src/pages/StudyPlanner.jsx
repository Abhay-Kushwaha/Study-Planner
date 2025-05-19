import { useState, useRef, useEffect } from "react";
import { generateStudyPlan } from "../services/api";

const StudyPlanner = () => {
    const [subjects, setSubjects] = useState([
        { name: "", chapters: "", knowledge: "" },
    ]);
    const [examDate, setExamDate] = useState("");
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(false);
    const planRef = useRef(null);

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setExamDate(today);
    }, []);

    const addSubject = () => {
        setSubjects([...subjects, { name: "", chapters: "", knowledge: "" }]);
    };

    const removeSubject = (index) => {
        const updatedSubjects = [...subjects];
        updatedSubjects.splice(index, 1);
        setSubjects(updatedSubjects);
    };

    const updateSubject = (index, field, value) => {
        const updatedSubjects = [...subjects];
        updatedSubjects[index][field] = value;
        setSubjects(updatedSubjects);
    };

    const handleGeneratePlan = async () => {
        if (!examDate || subjects.length === 0) {
            alert("Please enter exam date and at least one subject.");
            return;
        }

        for (const sub of subjects) {
            if (!sub.name || !sub.chapters || !sub.knowledge) {
                alert("Please fill all fields.");
                return;
            }
            if (sub.knowledge < 0 || sub.knowledge > 100) {
                alert(
                    `Knowledge for ${sub.name || "a subject"} must be between 0 and 100`
                );
                return;
            }
        }

        setLoading(true);
        try {
            const data = await generateStudyPlan({
                subjects,
                exam_date: examDate,
            });
            setPlan(data);
            setTimeout(() => {
                planRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 200);
        } catch (error) {
            console.error("Error generating plan:", error);
            alert("Failed to generate plan.");
        }
        setLoading(false);
    };

    // Save plan to localStorage
    const handleSavePlan = () => {
        if (!plan) return;
        const savedPlans = JSON.parse(localStorage.getItem("studyPlans") || "[]");
        const newPlan = {
            id: Date.now(),
            examDate,
            subjects,
            plan: plan.study_plan,
        };
        localStorage.setItem("studyPlans", JSON.stringify([newPlan, ...savedPlans]));
        alert("Plan saved! Check Dashboard.");
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
                🧠 Study Planner
            </h2>

            <div className="grid gap-4 mb-6">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <label className="font-semibold text-gray-700">Exam Date:</label>
                    <input
                        type="date"
                        value={examDate}
                        min={new Date().toISOString().split("T")[0]}
                        onChange={(e) => setExamDate(e.target.value)}
                        className="border border-gray-300 rounded px-4 py-2 w-full sm:w-auto"
                    />
                </div>
            </div>

            <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300 text-center">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2">Subject</th>
                            <th className="px-4 py-2">No. of Chapters</th>
                            <th className="px-4 py-2">% Known</th>
                            <th className="px-4 py-2">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((sub, i) => (
                            <tr key={i} className="border-t">
                                <td className="px-4 py-2">
                                    <input
                                        type="text"
                                        value={sub.name}
                                        onChange={(e) =>
                                            updateSubject(i, "name", e.target.value)
                                        }
                                        className="border rounded px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <input
                                        type="number"
                                        value={sub.chapters}
                                        onChange={(e) =>
                                            updateSubject(i, "chapters", e.target.value)
                                        }
                                        className="border rounded px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <input
                                        type="number"
                                        value={sub.knowledge}
                                        onChange={(e) =>
                                            updateSubject(i, "knowledge", e.target.value)
                                        }
                                        className="border rounded px-2 py-1 w-full"
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <button
                                        onClick={() => removeSubject(i)}
                                        className="text-red-600 hover:text-red-800 font-semibold"
                                    >
                                        ❌
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between gap-4">
                <button
                    onClick={addSubject}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition font-semibold w-full"
                >
                    ➕ Add Subject
                </button>
                <button
                    onClick={handleGeneratePlan}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition font-semibold w-full"
                >
                    🚀 Generate Plan
                </button>
            </div>

            {loading && (
                <p className="text-center text-blue-600 mt-6">
                    Generating your plan... hang tight! 📚
                </p>
            )}

            {plan && (
                <div ref={planRef} className="mt-10">
                    <h3 className="text-2xl font-bold text-blue-700 mb-4">
                        Your Study Plan 📅
                    </h3>
                    <button
                        onClick={handleSavePlan}
                        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition font-semibold"
                    >
                        💾 Save Plan
                    </button>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-center">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Time Slot</th>
                                    <th className="px-4 py-2">Subject</th>
                                    <th className="px-4 py-2">Chapter</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plan.study_plan.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="px-4 py-2 border">{item.date}</td>
                                        <td className="px-4 py-2 border">{item.time_slot}</td>
                                        <td className="px-4 py-2 border">{item.subject}</td>
                                        <td className="px-4 py-2 border">{item.chapter}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudyPlanner;
