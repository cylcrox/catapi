from controllers.cats_controller import CatsController
from utils.http_utils import HttpUtils
from urllib.parse import urlparse, parse_qs

class CatsResolver:

  def __init__(self, db_session):
    self.controller = CatsController(db_session)
    self.utils = HttpUtils()

  def resolve_post(self, request):
    cat = self.utils.read_request_body(request)
    self.controller.add_to_favorites(request, cat.get("id"))

  def resolve_get(self, request):
    id = self.get_id_from_path(request.path)
    breed_id = self.get_query_param_from_path(request.path, "breed_id")
    if id == None:
      self.controller.list_cats(request, breed_id)
    else:
      self.controller.get_cat_by_id(request, id)

  def resolve_put(self, request):
    cat = self.utils.read_request_body(request)
    id = self.get_id_from_path(request.path)
    self.controller.update_cat_by_id(request, id, cat)

  def resolve_delete(self, request):
    id = self.get_id_from_path(request.path)
    self.controller.remove_from_favorites(request, id)
    
  def get_id_from_path(self, path):
    path_portions = path.split("cats/")
    return path_portions[1] if len(path_portions)>1 else None
  
  def get_query_param_from_path(sef, path, param_key):
    query_string = parse_qs(urlparse(path).query)
    if param_key in query_string:
      return query_string[param_key][0]
    else:
      return None
