import http.server
from router import Router
from database.repo.repo import Repo

class RequestHandler(http.server.BaseHTTPRequestHandler):
    
    repo = Repo()
    db_session = repo.initialize()
    router = Router(db_session)

    def do_POST(self): 
      self.router.post(self)

    def do_GET(self): 
      self.router.get(self)

    def do_PUT(self): 
      self.router.put(self)

    def do_DELETE(self): 
      self.router.delete(self)
