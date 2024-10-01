from utils.http_utils import HttpUtils
from database.repositories.breeds import Breeds

class BreedsController:

  def __init__(self, db_session):
    self.utils = HttpUtils()
    self.repo = Breeds(db_session)

  def list_breeds(self, request):
    breeds_list = self.repo.list()
    response = []
  
    self.utils.successful_response(request, 
      list(map(lambda breed: 
      {
        "id": breed.id,
        "name": breed.name,
      }, breeds_list))
    )
