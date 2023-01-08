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
<<<<<<< HEAD


class Contact(models.Model):
    fName = models.TextField(max_length=255)
    lName = models.TextField(max_length=255, null=True)
    telephone = models.TextField()
    email = models.TextField()
=======
    apfo = models.DateField(null=True)
>>>>>>> f38d82f59c6f3361d74e16056a6c8751d13c98ea
