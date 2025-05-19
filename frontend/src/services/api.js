const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    },
});
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});
export default instance;

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