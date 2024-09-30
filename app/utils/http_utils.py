import json

class HttpUtils:

  def base_path(self, path):
    return path.split('/')[1]

  def matches(self, path, route):
    return self.base_path(path) == route 

  def read_request_body(self, request):
    return json.loads(request.rfile.read(int(request.headers['Content-Length'])))

  def successful_response(self, request, body, message = "Success!"):
    request.send_response(200, message)
    request.send_header('Content-Type', 'application/json')
    request.end_headers()
    request.wfile.write(json.dumps(body).encode())
  
  def not_found_response(self, request):
    request.send_response(404)
    request.send_header('Content-Type', 'application/json')
    request.end_headers()

