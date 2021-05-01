from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Author, Category, Book


# class AuthorSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     name = serializers.CharField()
#     biography = serializers.CharField()
#     image = serializers.CharField()
#
#     def create(self, validated_data):
#         author = Author.objects.create(name=validated_data.get('name', 'biography', 'image'))
#         return author
#
#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name')
#         instance.save()
#         return instance

class AuthorSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    biography = serializers.CharField()
    image = serializers.CharField()

    class Meta:
        model = Author
        fields = ('id', 'name', 'biography', 'image')




class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance

class BookSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    author = serializers.CharField()
    category = serializers.CharField()
    year = serializers.IntegerField()
    description = serializers.CharField()
    image = serializers.CharField()

    def create(self, validated_data):
        book = Book.objects.create(name=validated_data.get('name', 'author', 'category', 'year',
                                                           'description', 'image'))
        return book

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance

# class BookSerializer(serializers.ModelSerializer):
#
#     class Meta:
#         model = Book
#         fields = ('id', 'name', 'author', 'genre', 'year', 'description', 'likes', 'image')

# class UserSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     username = serializers.CharField(max_length=150)
#     # first_name = serializers.CharField(max_length=30)
#     # last_name = serializers.CharField(max_length=150)
#     email = serializers.CharField(max_length=254)
#     password = serializers.CharField(max_length=128)
#
#     def create(self, validated_data):
#         user = User.objects.create_user(username=validated_data.get('username'),
#                                         email=validated_data.get('email'),
#                                         password=validated_data.get('password'))
#         # user.first_name = validated_data.get('first_name')
#         # user.last_name = validated_data.get('last_name')
#         user.save()
#         return user
#
#     def update(self, instance, validated_data):
#         return instance

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()
    email = serializers.CharField()

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')
