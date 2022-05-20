from django.urls import path
from . import views

urlpatterns = [
    path('blogs/', views.getNames, name='blog'),
    path('blogs/<pk>', views.getName, name='blog'),
    path('Image/all', views.getImage, name='image'),
    path('Image/<str:categorys>', views.getImages, name='imageCategory'),
]
