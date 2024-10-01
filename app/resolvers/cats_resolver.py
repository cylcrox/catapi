from controllers.cats_controller import CatsController
class CatsResolver:

  def __init__(self, db_session):
    self.controller = CatsController(db_session)

  def resolve_post(self, request):
    self.controller.create_cat(request)

  def resolve_get(self, request):
    self.controller.list_cats(request)

  def resolve_put(self, request):
    self.controller.update_cat_by_id(request)

  def resolve_delete(self, request):
    self.controller.delete_cat_by_id(request)
