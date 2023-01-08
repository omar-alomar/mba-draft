from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.getProjects, name='projects'),
    path('projects/<str:pk>/updateComment/', views.updateComment, name='update-comment'),

    path('projects/<str:pk>/', views.getProject, name='project')
]