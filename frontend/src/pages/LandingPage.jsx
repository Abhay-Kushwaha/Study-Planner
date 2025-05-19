import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Study Planner</h1>
            <p className="mb-8 text-lg">Get organized. Study smarter.</p>
            <button
                className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold"
                onClick={() => navigate('/login')}
            >
                Login
            </button>
        </div>
    );
}
