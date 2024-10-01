from utils.http_utils import HttpUtils
from database.repositories.cats import Cats

class CatsController:

  def __init__(self, db_session):
    self.utils = HttpUtils()
    self.repo = Cats(db_session)

  def add_to_favorites(self, request):
    self.utils.successful_response(request, self.repo.add_to_favorites(id), "Added to favorites!")

  def list_cats(self, request):
    self.utils.successful_response(request, self.repo.list())
  
  def get_cat_by_id(self, request, id):
    self.utils.successful_response(request, self.repo.get_by_id(id), "Cat found!")
  
  def update_cat_by_id(self, request, id, cat):
    self.utils.successful_response(request, self.repo.update_by_id(id, cat), "Cat updated!")
    
  def remove_from_favorites(self, request, id):
    self.utils.successful_response(request, self.repo.remove_from_favorites(id), "Removed from favorites!")
