from sqlalchemy import Integer, Column, String, ForeignKey
from sqlalchemy.orm import Mapped, DeclarativeBase, relationship, mapped_column
from database.schema.breeds import Breeds


# declarative base class
class Base(DeclarativeBase):
    pass


# an example mapping using the base
class Cats(Base):
    __tablename__ = "cats"

    id: Mapped[str] = mapped_column(primary_key=True)
    name: Mapped[str]
    breed_id = Column(String, ForeignKey(Breeds.id))
