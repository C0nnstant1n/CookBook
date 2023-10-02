from django.urls import include, path
from rest_framework import routers
from .views import CategoryView, RecipeView, IndexView
from django.views.generic import TemplateView
from rest_framework.schemas import get_schema_view

router = routers.DefaultRouter()
router.register(r'category', CategoryView)
router.register(r'recipe', RecipeView)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", IndexView.as_view(), name='home'),
    path('api/', include(router.urls)),
    # Route TemplateView to serve Swagger UI template.
    #   * Provide `extra_context` with view name of `SchemaView`.
    path('openapi', get_schema_view(
        title="Cooking Recipes",
        description="API for all things …",
        version="1.0.0"
    ), name='openapi-schema'),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url': 'openapi-schema'}
    ), name='swagger-ui'),
]