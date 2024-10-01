from database.schema.breeds import Breeds as BreedsSchema

class Breeds:
  def __init__(self, db_session):
    self.db_session = db_session

  def create_if_not_exists(self, breed):
    existing_breed = self.db_session.query(BreedsSchema).get(breed.get("id"))
    
    if existing_breed == None:
      new_breed = BreedsSchema(id=breed.get("id"), name=breed.get("name"))
      self.db_session.add(new_breed)   
      self.db_session.commit()
      print("--**Created breed: "+ breed.get("name"))
    else:
      print("-->>Existing breed: "+ existing_breed.name)

  def list(self):
    return self.db_session.query(BreedsSchema).all()
