import React from "react";

const PlanCard = ({ plan, onOpen, onDelete }) => {
    return (
        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-md border border-indigo-100 hover:shadow-xl transition-shadow duration-200 flex flex-col justify-between min-h-[300px] max-w-sm p-5 relative overflow-hidden">
            <div className="flex-grow">
                <h3 className="text-xs uppercase text-indigo-400 font-semibold tracking-wide">Exam Date</h3>
                <p className="text-xl font-bold text-indigo-700 mb-4">{plan.examDate}</p>

                <h4 className="text-sm font-semibold text-gray-800 mb-1">Subjects:</h4>
                <p className="text-sm text-gray-700 leading-snug line-clamp-3">
                    {plan.subjects.map((s) => s.name).join(", ")}
                </p>
            </div>

            <div className="mt-6 flex gap-3">
                <button
                    onClick={() => onOpen(plan)}
                    className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all"
                >
                    View
                </button>
                <button
                    onClick={() => onDelete(plan.id)}
                    className="w-full bg-red-50 text-red-600 py-2 rounded-md text-sm font-semibold border border-red-200 hover:bg-red-100 transition-all"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default PlanCard;
