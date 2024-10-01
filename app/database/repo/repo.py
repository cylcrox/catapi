import os
from dotenv import load_dotenv
from sqlalchemy import URL, create_engine
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import sessionmaker


class Repo:
  def initialize(self):
    # TODO: FIX READING DB VARS
    # database = os.getenv('POSTGRES_DB')
    # username = os.getenv('POSTGRES_USER')
    # password = os.getenv('POSTGRES_PASSWORD')
    # host = os.getenv('POSTGRES_HOST')

    url = URL.create(
      "postgresql+psycopg2",
      username="sample",
      password="sample",  # plain (unescaped) text
      host="localhost",
      database="cats",
    )

    print("Opening connection to the DB")
    engine = create_engine(url)

    try:
      engine.connect()
      print("Connected to database...")
      Session = sessionmaker(bind=engine)
      return Session()
    except SQLAlchemyError as err:
      print("Can't connect to to the DB", err.__cause__)
