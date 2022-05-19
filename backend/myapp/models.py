from django.db import models

# Create your models here.


class Post(models.Model):
    Topic = models.CharField(max_length=250, default='')
    Desc = models.CharField(max_length=750, default='')
    Link = models.TextField(default='')

    def __str__(self):
        return str(self.Topic)


class PostImage(models.Model):
    post = models.ForeignKey(Post, default=None, on_delete=models.CASCADE)
    images = models.FileField(upload_to='images/')
    # พรุ่งนี้เช้ามาเพิ่ม property เพื่อเอาข้อมูลจาก parent

    def __str__(self):
        return str(self.post)
