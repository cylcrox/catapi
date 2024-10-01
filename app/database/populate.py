from setup.db import DBSetup
from schema.cats import Cats as CatsSchema
from schema.breeds import Breeds as BreedsSchema
from repositories.breeds import Breeds as BreedsRepo
from repositories.cats import Cats as CatsRepo

import json 
import requests

cats_api_url = "https://api.thecatapi.com/v1/images/search?size=thumb&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100"
THE_CATS_API_API_KEY = "live_pXQAunhwGmwavQIauLfT5iSaMIWig6YCBD6n68cerxZ8mUU9J0IqC3lq7CLAJLny"

class Populate:
  def __init__(self):  
    db_session = DBSetup().initialize()
    self.db_session = db_session
    self.breeds_repo = BreedsRepo(db_session)
    self.cats_repo = CatsRepo(db_session)
  
  def populate(self):
    response = requests.get(cats_api_url, headers= { "x-api-key": THE_CATS_API_API_KEY })
    for cat in json.loads(response.text):
      with self.db_session.begin():
        breed = cat.get("breeds")[0]
        self.breeds_repo.create_if_not_exists(breed)
      self.db_session.commit()
      with self.db_session.begin():
        self.cats_repo.create_if_not_exists(cat)
      self.db_session.commit()
      
def start():
  Populate().populate()

if __name__ == '__main__':
    start()
