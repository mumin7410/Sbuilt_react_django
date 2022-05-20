from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post, PostImage
from .Serializer import BlogSerializer, ImageSerializer
# Create your views here.


@api_view(['GET'])
def getNames(request):
    Blog = Post.objects.all()
    serializer = BlogSerializer(Blog, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getName(request, pk):
    Blog = Post.objects.get(id=pk)
    serializer = BlogSerializer(Blog, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getImage(request):
    image = PostImage.objects.all()
    serializer = ImageSerializer(image, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getImages(request, category):
    image = PostImage.objects.filter(category__categoryName=category)
    serializer = ImageSerializer(image, many=True)
    return Response(serializer.data)
