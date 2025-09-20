from datetime import datetime
from typing import Optional

from sqlmodel import Field, SQLModel, create_engine, Session

class Contact(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str
    message: str
    created_at: datetime = Field(default_factory=datetime.utcnow)

def init_db(database_url: str):
    engine = create_engine(database_url, connect_args={"check_same_thread": False})
    SQLModel.metadata.create_all(engine)
    return engine

def save_contact(engine, name: str, email: str, message: str):
    with Session(engine) as session:
        c = Contact(name=name, email=email, message=message)
        session.add(c)
        session.commit()
        session.refresh(c)
        return c
