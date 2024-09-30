from resolvers.cats_resolver import CatsResolver
from utils.http_utils import HttpUtils

class Router:

  def __init__(self):
    self.utils = HttpUtils()
    self.cats_resolver = CatsResolver()

  def get(self, request):
    if self.utils.matches(request.path, 'cats'):
      self.cats_resolver.resolve_get(request)
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
    