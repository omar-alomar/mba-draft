from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.getProjects, name='projects'),
    path('projects/create/', views.createProject, name='create-project'),

    path('contacts/', views.getContacts, name='contacts'),
    path('contacts/create/', views.createContact, name='create-contact'),
    path('projects/<str:pk>/updateComment/', views.updateComment, name='update-comment'),

    path('projects/<str:pk>/', views.getProject, name='project'),
    path('projects/<str:pk>/edit/', views.editProject, name='edit-project'),
]