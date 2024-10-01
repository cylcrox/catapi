import http.server
from request_handler import RequestHandler

def start_server():
    server_address = ('', 8000)
    httpd = http.server.HTTPServer(server_address, RequestHandler)
    print('Server started. Listening on localhost:8000...')
    httpd.serve_forever()

if __name__ == '__main__':
    start_server()
