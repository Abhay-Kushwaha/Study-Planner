from datetime import datetime
import google.generativeai as genai
import os
import re
import json
from dotenv import load_dotenv
load_dotenv()

def load_api_key():
    api_key = os.getenv("API_KEY")
    if not api_key:
        raise ValueError("API_KEY not set in environment variables")
    return api_key
API_KEY = load_api_key()

def generate_custom_plan(subjects, exam_date_str):
    today = datetime.now().date()
    exam_date = datetime.strptime(exam_date_str, "%Y-%m-%d").date()
    total_days = (exam_date - today).days
    if total_days <= 0:
        return []
    prompt = (
        "You are a study planner assistant. "
        "Given the following subjects, chapters, and knowledge levels, "
        "and the exam date, create a detailed study plan. "
        "Distribute chapters across days and time slots (Morning, Afternoon, Evening) "
        "from today ({today}) to the exam date ({exam_date}). "
        "Return the plan as a JSON list of objects with keys: date (YYYY-MM-DD), time_slot, subject, chapter.\n\n"
        "Subjects:\n"
    ).format(today=today, exam_date=exam_date)

    for subject in subjects:
        prompt += f"- {subject.name}: {subject.chapters} chapters, knowledge {subject.knowledge}%\n"
    prompt += f"\nExam Date: {exam_date}\n"
    try:
        genai.configure(api_key=API_KEY)
        model = genai.GenerativeModel("models/gemini-1.5-flash")
        response = model.generate_content(prompt)
        raw = response.text
        match = re.search(r"\[.*\]", raw, re.DOTALL)
        if match:
            json_str = match.group(0)
            try:
                plan = json.loads(json_str)
            except Exception:
                plan = []
        else:
            plan = []
        return plan
    except Exception as e:
        print("Exception occurred:", e)
        return []