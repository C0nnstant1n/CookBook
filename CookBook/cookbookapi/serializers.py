from .models import Category, Recipe
from rest_framework import serializers


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ["id", "title", "recipe"]


class RecipeSerializerForCategoryList(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'title']


class CategorySerializer(serializers.ModelSerializer):
    recipe = RecipeSerializerForCategoryList(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'recipe']
