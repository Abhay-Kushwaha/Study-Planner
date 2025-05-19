# app/routes/auth.py
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from jose import jwt
from passlib.context import CryptContext
import datetime

router = APIRouter()

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Dummy user database
fake_users_db = {
    "test@ex.com": {
        "email": "test@ex.com",
        "hashed_password": pwd_context.hash("password123")
    }
}

class LoginData(BaseModel):
    email: str
    password: str

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

@router.post("/auth/login")
def login(data: LoginData):
    user = fake_users_db.get(data.email)
    if not user or not verify_password(data.password, user["hashed_password"]):
        raise HTTPException(status_code=400, detail="Invalid credentials")
    
    expire = datetime.datetime.utcnow() + datetime.timedelta(hours=1)
    token = jwt.encode({"sub": data.email, "exp": expire}, SECRET_KEY, algorithm=ALGORITHM)
    return {"access_token": token, "token_type": "bearer"}
