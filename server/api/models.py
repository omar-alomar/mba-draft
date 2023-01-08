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