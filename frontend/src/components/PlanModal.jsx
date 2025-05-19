import React, { useState, useEffect } from "react";
import PlanCard from "../components/PlanCard";
import PlanModal from "../components/PlanModal";

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
        <div>
            <h1 className="text-4xl font-extrabold text-left mb-2 text-gray-800">Dashboard</h1>
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">Previously Generated Plans</h2>

            {plans.length === 0 && (
                <p className="text-gray-500 italic">No saved plans yet. Start planning your success!</p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan) => (
                    <PlanCard
                        key={plan.id}
                        plan={plan}
                        onOpen={handleOpen}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            {selectedPlan && (
                <PlanModal plan={selectedPlan} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default Dashboard;
