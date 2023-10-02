from django.shortcuts import render
from rest_framework import viewsets
from django.views.generic import TemplateView
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


class CategoryView(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Category.objects.all().order_by('id')
    serializer_class = CategorySerializer


class RecipeView(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Recipe.objects.all().order_by('id')
    serializer_class = RecipeSerializer


class IndexView(TemplateView):
    template_name = 'default.html'