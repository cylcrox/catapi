from sqlalchemy import Integer, Column, String, ForeignKey
from sqlalchemy.orm import Mapped, DeclarativeBase, relationship, mapped_column
from .breeds import Breeds

class Base(DeclarativeBase):
    pass

class Cats(Base):
    __tablename__ = "cats"

    id: Mapped[str] = mapped_column(primary_key=True)
    url: Mapped[str]
    favorite: Mapped[bool]
    breed_id = Column(String, ForeignKey(Breeds.id))
