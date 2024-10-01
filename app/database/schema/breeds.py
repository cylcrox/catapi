from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    pass

class Breeds(Base):
    __tablename__ = "breeds"

    id: Mapped[str] = mapped_column(primary_key=True)
    name: Mapped[str]
