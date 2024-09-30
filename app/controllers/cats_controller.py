from utils.http_utils import HttpUtils
class CatsController:

  def __init__(self, repo):
    self.utils = HttpUtils()
    self.repo = repo

  def create_cat(self, request):
    request_body = self.utils.read_request_body(request)
    self.utils.successful_response(request, request_body, "Cat created")

  def list_cats(self, request):
    self.utils.successful_response(request, {})
  
  def get_cat_by_id(self, request, id):
    self.utils.successful_response(request, {}, "Cat found!")
  
  def update_cat_by_id(self, request, id, cat):
    request_body = self.utils.read_request_body(request)
    self.utils.successful_response(request, request_body, "Cat updated!")
    
  def delete_cat_by_id(self, request, id):
    request_body = self.utils.read_request_body(request)
    self.utils.successful_response(request, request_body, "Cat deleted!")
