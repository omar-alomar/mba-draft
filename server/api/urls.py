from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.getProjects, name='projects'),
    path('projects/<str:pk>/', views.getProject, name='project'),

    path('contacts/', views.getContacts, name='contacts'),
    path('contacts/create/', views.createContact, name='create-contact')
]