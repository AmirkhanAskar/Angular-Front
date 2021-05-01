from django.db import models

# Create your models here.

class Author(models.Model):
    name = models.CharField(max_length=100)
    biography = models.TextField(null=True)
    image = models.CharField(max_length=300, null=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'biography': self.biography,
            'image': self.image
        }

class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Book(models.Model):
    name = models.CharField(max_length=255)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    year = models.IntegerField()
    likes = models.IntegerField()
    description = models.TextField()
    image = models.CharField(max_length=300, null=True)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'author': self.author.name,
            'genre': self.category.name,
            'year': self.year,
            'description': self.description,
            'likes': self.likes,
            'image': self.image
        }

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=20)
    email = models.CharField(max_length=30)

    def to_json(self):
        return {
            'id': self.id,
            'username': self.name,
            'password': self.password,
            'email': self.email
        }