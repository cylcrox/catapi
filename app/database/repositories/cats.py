from sqlalchemy import update
from database.schema.cats import Cats as CatsSchema

class Cats:
  def __init__(self, db_session):
    self.db_session = db_session

  def create(self, cat):
      new_cat = CatsSchema(id= cat.get("id"), url= cat.get("url"), breed_id= cat.get("breeds")[0].get("id"))
      self.db_session.add(new_cat)   
      self.db_session.commit()

  def list(self, page=0, pageSize=10):
    return self.db_session.query(CatsSchema).all()

  def get_by_id(self, id):
    return self.db_session.query(CatsSchema).get(id)

  def update_by_id(self, id, cat):
    existing_cat = self.db_session.query(CatsSchema).get(id)

    url = cat.get("url") if cat.get("url") != None and len(cat.get("url"))>0 else existing_cat.url
    favorite = cat.get("favorite") if cat.get("favorite") != None else existing_cat.favorite
    breed_id = cat.get("breed_id") if cat.get("breed_id") != None and len(cat.get("breed_id"))>0 else existing_cat.breed_id
    
    update_query = update(CatsSchema).where(CatsSchema.id == id).values(url = url, favorite = favorite, breed_id = breed_id)

    return self.run(update_query)

  def add_to_favorites(self, id):
    update_query = update(CatsSchema).where(CatsSchema.id == id).values(favorite = True)
    return self.run(update_query)

  def remove_from_favorites(self, id):
    update_query = update(CatsSchema).where(CatsSchema.id == id).values(favorite = False)
    return self.run(update_query)

  def run(self, query):
    self.db_session.execute(query)
    self.db_session.commit()
