from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.getProjects, name='projects'),
<<<<<<< HEAD
    path('projects/<str:pk>/', views.getProject, name='project'),

    path('contacts/', views.getContacts, name='contacts'),
    path('contacts/create/', views.createContact, name='create-contact')
=======
    path('projects/<str:pk>/updateComment/', views.updateComment, name='update-comment'),

    path('projects/<str:pk>/', views.getProject, name='project')
>>>>>>> f38d82f59c6f3361d74e16056a6c8751d13c98ea
]