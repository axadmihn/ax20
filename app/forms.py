from pydantic import BaseModel, EmailStr, Field

class ContactForm(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=5, max_length=5000)