from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Post, PostImage


class BlogSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'


class ImageSerializer(ModelSerializer):
    topic_link = serializers.CharField(source='post.Link', read_only=True)
    Category = serializers.CharField(source='category', read_only=True)

    class Meta:
        model = PostImage
        fields = '__all__'
