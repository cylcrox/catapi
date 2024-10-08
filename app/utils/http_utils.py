import json

class HttpUtils:

  def base_path(self, path):
    return path.split('/')[1]

  def matches(self, path, route):
    base_path = self.base_path(path.split("?")[0])
    print(base_path)
    return base_path == route

  def read_request_body(self, request):
    return json.loads(request.rfile.read(int(request.headers['Content-Length'])))

  def successful_response(self, request, body, message = "Success!"):
    request.send_response(200, message)
    request.send_header('Content-Type', 'application/json')
    request.send_header('Access-Control-Allow-Origin', 'http://localhost:3000')
    request.end_headers()
    request.wfile.write(json.dumps(body).encode())
  
  def not_found_response(self, request):
    request.send_response(404)
    request.send_header('Content-Type', 'application/json')
    request.end_headers()

