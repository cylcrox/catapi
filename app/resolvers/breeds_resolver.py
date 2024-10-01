from controllers.breeds_controller import BreedsController
from utils.http_utils import HttpUtils
class BreedsResolver:

  def __init__(self, db_session):
    self.controller = BreedsController(db_session)
    self.utils = HttpUtils()

  def resolve_get(self, request):
      self.controller.list_breeds(request)
