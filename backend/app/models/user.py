from pydantic import BaseModel
from typing import List
from datetime import date

class SubjectInput(BaseModel):
    name: str
    chapters: int
    knowledge: float  # percentage known

class StudyPlanRequest(BaseModel):
    subjects: List[SubjectInput]
    exam_date: date

class User(BaseModel):
    id: int
    name: str
    email: str 