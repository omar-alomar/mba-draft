from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.TextField(max_length=255)
    mbaNo = models.TextField()
    coFileNo = models.TextField()
    ded = models.TextField()
    dld = models.TextField()
    manager = models.TextField()
    comments = models.TextField()
    apfo = models.DateField(null=True)
    status = models.TextField()

class Contact(models.Model):
    fName = models.TextField(max_length=255)
    lName = models.TextField(max_length=255, null=True)
    telephone = models.TextField()
    email = models.TextField()

class Announcement(models.Model):
    title = models.TextField(max_length=255)
    body = models.TextField(max_length=255, null=True)
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    
class Link(models.Model):
    name = models.TextField()
    url = models.URLField()
