from typing import Optional

from pydantic_settings import BaseSettings
import os

def _default_db_url() -> str:
    if os.getenv("DATABASE_URL"):
        return os.getenv("DATABASE_URL")
    if os.getenv("VERCEL") == "1" or os.getenv("AWS_LAMBDA_FUNCTION_NAME"):
        return "sqlite:////tmp/contact.db"  # writable on Vercel
    return "sqlite:///./app/data/contact.db"

class Settings(BaseSettings):
    PROJECT_NAME: str = "Axnmihn"
    CONTACT_EMAIL: str = "axadmihn@axnmihn.com"
    CONTACT_PHONE: str = "+1 604-724-8864"
    COMPANY_ADDRESS: str = "120 E 41st Ave, Vancouver BC V5W 1N7, Canada"
    ADMIN_HANDLE: str = "axadmihn"
    ALLOW_ORIGINS: str = "*"
    SENDGRID_API_KEY: Optional[str] = None
    DATABASE_URL: str = _default_db_url()

    class Config:
        env_file = ".env"

settings = Settings()
