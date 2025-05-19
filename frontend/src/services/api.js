const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'; // update port if using FastAPI locally

export const checkBackendStatus = async () => {
    try {
        const response = await fetch(`${API_URL}/`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error checking backend status:', error);
        throw error;
    }
};

export const generateStudyPlan = async (payload) => {
    try {
        const response = await fetch(`${API_URL}/generate-plan`, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("No response from backend");

        const data = await response.json();
        console.log("Generated Study Plan:", data);
        return data;
    } catch (error) {
        console.error("Error generating study plan:", error);
        throw error;
    }
};