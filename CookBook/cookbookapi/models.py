from django.db import models


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=32, unique=False)

    def __str__(self):
        return f"{self.name}"


class Recipe(models.Model):
    title = models.CharField(max_length=32, unique=False)
    recipe = models.TextField()
    date_add = models.DateTimeField(auto_now=True)
    category = models.ForeignKey(Category, related_name="recipe", on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title}"
