from attr import field
from rest_framework.serializers import ModelSerializer
from .models import Post,PostImage


class BlogSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

class ImageSerializer(ModelSerializer):
    class Meta:
        model = PostImage
        fields = '__all__'
