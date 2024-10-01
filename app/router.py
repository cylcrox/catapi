from resolvers.cats_resolver import CatsResolver
from resolvers.breeds_resolver import BreedsResolver
from utils.http_utils import HttpUtils

class Router:

  def __init__(self, db_session):
    self.utils = HttpUtils()
    self.cats_resolver = CatsResolver(db_session)
    self.breeds_resolver = BreedsResolver(db_session)

  def get(self, request):
    if self.utils.matches(request.path, 'cats'):
      self.cats_resolver.resolve_get(request)
    elif self.utils.matches(request.path, 'breeds'):
      self.breeds_resolver.resolve_get(request)
    else:
      self.utils.not_found_response(request)
    
  def post(self, request):
    if self.utils.matches(request.path, 'cats'):
      self.cats_resolver.resolve_post(request)
    else:
      self.utils.not_found_response(request)
      
  def put(self, request):
    if self.utils.matches(request.path, 'cats'):
      self.cats_resolver.resolve_put(request)
    else:
      self.utils.not_found_response(request)
    
  def delete(self, request):
    if self.utils.matches(request.path, 'cats'):
      self.cats_resolver.resolve_delete(request)
    else:
      self.utils.not_found_response(request)
    