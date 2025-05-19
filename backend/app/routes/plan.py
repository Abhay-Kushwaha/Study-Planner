from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from app.utils.generate_plan import generate_custom_plan

router = APIRouter()

class Subject(BaseModel):
    name: str
    chapters: int
    knowledge: float

class PlanRequest(BaseModel):
    exam_date: str
    subjects: List[Subject]

@router.post("/generate-plan")
def create_plan(data: PlanRequest):
    plan = generate_custom_plan(data.subjects, data.exam_date)
    return { "study_plan": plan }
