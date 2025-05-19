import React, { useState, useEffect } from "react";

const Dashboard = () => {
    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("studyPlans") || "[]");
        setPlans(saved);
    }, []);

    const handleOpen = (plan) => setSelectedPlan(plan);
    const handleDelete = (id) => {
        const updated = plans.filter((p) => p.id !== id);
        setPlans(updated);
        localStorage.setItem("studyPlans", JSON.stringify(updated));
    };
    const handleCloseModal = () => setSelectedPlan(null);

    return (
        <div className="w-2xl">
            <h1 className="text-4xl font-extrabold text-left mb-2 text-gray-800">Dashboard</h1>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">Previously Generated Study Plans</h2>

            {plans.length === 0 && (
                <p className="text-gray-500 italic">No saved plans yet. Start planning your success!</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 transition-transform hover:scale-[1.02] hover:shadow-2xl border border-blue-100"
                    >
                        <div className="text-sm text-gray-500 mb-1">Exam Date</div>
                        <div className="text-lg font-semibold text-blue-800 mb-3">{plan.examDate}</div>

                        <div className="text-sm text-gray-700 mb-4">
                            <span className="font-medium text-gray-600">Subjects:</span>{" "}
                            {plan.subjects.map(s => s.name).join(", ")}
                        </div>

                        <div className="flex justify-between mt-auto gap-3">
                            <button
                                onClick={() => handleOpen(plan)}
                                className="flex-1 bg-blue-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
                            >
                                View
                            </button>
                            <button
                                onClick={() => handleDelete(plan.id)}
                                className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg border border-red-200 hover:bg-red-100 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedPlan && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative flex flex-col border border-gray-200">
                        <button
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-3xl font-light"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-blue-700">
                            Study Plan for {selectedPlan.examDate}
                        </h2>

                        <div className="overflow-y-auto rounded-lg border border-gray-200 shadow-inner" style={{ maxHeight: "60vh" }}>
                            <table className="min-w-full text-sm text-gray-700">
                                <thead className="bg-gray-100 sticky top-0">
                                    <tr>
                                        <th className="px-4 py-2 border-b text-left">Date</th>
                                        <th className="px-4 py-2 border-b text-left">Time Slot</th>
                                        <th className="px-4 py-2 border-b text-left">Subject</th>
                                        <th className="px-4 py-2 border-b text-left">Chapter</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedPlan.plan.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-blue-50">
                                            <td className="px-4 py-2 border-b">{item.date}</td>
                                            <td className="px-4 py-2 border-b">{item.time_slot}</td>
                                            <td className="px-4 py-2 border-b">{item.subject}</td>
                                            <td className="px-4 py-2 border-b">{item.chapter}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
