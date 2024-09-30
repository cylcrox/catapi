import http.server
from router import Router

class CatsServerHandler(http.server.BaseHTTPRequestHandler):
    
    router = Router()
  
    def do_POST(self): self.router.post(self)

    def do_GET(self): self.router.get(self)

    def do_PUT(self): self.router.put(self)

    def do_DELETE(self): self.router.delete(self)

def start_server():
    database.initialize()
    server_address = ('', 8000)
    httpd = http.server.HTTPServer(server_address, CatsServerHandler)
    print('Server started. Listening on localhost:8000...')
    httpd.serve_forever()

if __name__ == '__main__':
    start_server()
