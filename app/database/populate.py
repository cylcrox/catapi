import os
from dotenv import load_dotenv
from setup.db import DBSetup
from schema.cats import Cats as CatsSchema
from schema.breeds import Breeds as BreedsSchema
from repositories.breeds import Breeds as BreedsRepo
from repositories.cats import Cats as CatsRepo

import json 
import requests

class Populate:
  def __init__(self):  
    load_dotenv()
    db_session = DBSetup().initialize()
    self.db_session = db_session
    self.breeds_repo = BreedsRepo(db_session)
    self.cats_repo = CatsRepo(db_session)
  
  def populate(self):
    cats_api_url = os.getenv("CATS_API_URL")
    cats_api_key = os.getenv("THE_CATS_API_KEY")
    response = requests.get(cats_api_url, headers= { "x-api-key": cats_api_key })
    for cat in json.loads(response.text):
      with self.db_session.begin():
        breed = cat.get("breeds")[0]
        self.breeds_repo.create_if_not_exists(breed)
      self.db_session.commit()
      with self.db_session.begin():
        self.cats_repo.create_if_not_exists(cat)
      self.db_session.commit()
      print("Database has been populated!")
      
def start():
  Populate().populate()

if __name__ == '__main__':
    start()
