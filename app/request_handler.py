import http.server
from router import Router
from database.setup.db import DBSetup

class RequestHandler(http.server.BaseHTTPRequestHandler):
    
    db_setup = DBSetup()
    db_session = db_setup.initialize()
    router = Router(db_session)

    def do_POST(self): 
      self.router.post(self)

    def do_GET(self): 
      self.router.get(self)

    def do_PUT(self): 
      self.router.put(self)

    def do_DELETE(self): 
      self.router.delete(self)
      
    def do_OPTIONS(self):
      self.send_response(200)
      self.send_header('Access-Control-Allow-Origin', 'http://localhost:3000')
      self.send_header('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS')
      self.send_header('Access-Control-Allow-Headers', 'Content-Type')
      self.end_headers()
