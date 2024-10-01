import os
from dotenv import load_dotenv
from sqlalchemy import URL, create_engine
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import sessionmaker


class DBSetup:
  def initialize(self):
    # TODO: FIX READING DB VARS
    # database = os.getenv('POSTGRES_DB')
    # username = os.getenv('POSTGRES_USER')
    # password = os.getenv('POSTGRES_PASSWORD')
    # host = os.getenv('POSTGRES_HOST')

    engine = create_engine(
      URL.create(
        "postgresql+psycopg2",
        username="sample",
        password="sample",
        host="localhost",
        database="cats",
      )
    )

    try:
      print("Opening connection to the DB...")
      engine.connect()
      print("Connected!")
      return sessionmaker(bind=engine)()
    except SQLAlchemyError as err:
      print("Can't connect to to the DB", err.__cause__)

