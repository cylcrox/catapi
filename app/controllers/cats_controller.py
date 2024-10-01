from utils.http_utils import HttpUtils
from database.schema.cats import Cats
class CatsController:

  def __init__(self, db_session):
    self.utils = HttpUtils()
    self.db_session = db_session

  def create_cat(self, request):
    request_body = self.utils.read_request_body(request)
    self.utils.successful_response(request, request_body, "Cat created")

  def list_cats(self, request):
    result = self.db_session.query(Cats)
    self.utils.successful_response(request, result)
  
  def get_cat_by_id(self, request, id):
    self.utils.successful_response(request, {}, "Cat found!")
  
  def update_cat_by_id(self, request, id, cat):
    request_body = self.utils.read_request_body(request)
    self.utils.successful_response(request, request_body, "Cat updated!")
    
  def delete_cat_by_id(self, request, id):
    request_body = self.utils.read_request_body(request)
    self.utils.successful_response(request, request_body, "Cat deleted!")
