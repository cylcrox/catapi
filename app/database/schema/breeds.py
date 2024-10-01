from sqlalchemy import Integer, String, ForeignKey
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


# declarative base class
class Base(DeclarativeBase):
    pass


# an example mapping using the base
class Breeds(Base):
    __tablename__ = "breeds"

    id: Mapped[str] = mapped_column(primary_key=True)
    name: Mapped[str]
    cats = relationship("Cats", backref="breeds")
