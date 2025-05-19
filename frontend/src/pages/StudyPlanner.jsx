import { useState } from "react";
import { generateStudyPlan } from "../services/api"; // <-- use your api.js function

const StudyPlanner = () => {
    const [subjects, setSubjects] = useState([]);
    const [examDate, setExamDate] = useState("");
    const [plan, setPlan] = useState(null);

    const addSubject = () => {
        setSubjects([...subjects, { name: "", chapters: 0, knowledge: 0 }]);
    };

    const updateSubject = (i, key, value) => {
        const newSubjects = [...subjects];
        newSubjects[i][key] = value;
        setSubjects(newSubjects);
    };

    const generatePlan = async () => {
        // Validation
        if (!examDate) {
            alert("Please select an exam date.");
            return;
        }
        for (const sub of subjects) {
            if (!sub.name || isNaN(sub.chapters) || isNaN(sub.knowledge)) {
                alert("Please fill all subject fields correctly.");
                return;
            }
        }

        try {
            const data = await generateStudyPlan({
                subjects,
                exam_date: examDate,
            });
            // console.log({
            //     subjects,
            //     exam_date: examDate,
            // });
            // console.log("Generated Plan:", data);
            setPlan(data);
        } catch (error) {
            console.error("Error generating plan:", error);
            alert("Failed to generate plan. Check backend logs.");
        }
    };

    return (
        <div>
            <h2>📘 Study Planner</h2>
            {subjects.map((sub, i) => (
                <div key={i}>
                    <input
                        placeholder="Subject"
                        onChange={(e) => updateSubject(i, "name", e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Chapters"
                        onChange={(e) => updateSubject(i, "chapters", Number(e.target.value))}
                    />
                    <input
                        type="number"
                        placeholder="% Known"
                        onChange={(e) => updateSubject(i, "knowledge", Number(e.target.value))}
                    />
                </div>
            ))}
            <button onClick={addSubject}>Add Subject</button>

            <input type="date" onChange={(e) => setExamDate(e.target.value)} />
            <button onClick={generatePlan}>Generate Plan</button>

            {plan && plan.study_plan && (
                <div>
                    <h3>🧠 Your Study Plan:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time Slot</th>
                                <th>Subject</th>
                                <th>Chapter</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plan.study_plan.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{item.date}</td>
                                    <td>{item.time_slot}</td>
                                    <td>{item.subject}</td>
                                    <td>{item.chapter}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default StudyPlanner;
