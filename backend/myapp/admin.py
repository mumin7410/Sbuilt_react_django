from django.contrib import admin
from .models import Category, Post, PostImage
# Register your models here.
# admin.site.register(Post)
# admin.site.register(PostImage)


class PostImageAdmin(admin.StackedInline):
    model = PostImage


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    inlines = [PostImageAdmin]  # MANY image to ONE Topic


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    inlines = [PostImageAdmin]  # MANY image to ONE category


@admin.register(PostImage)
class PostImageAdmin(admin.ModelAdmin):
    pass
