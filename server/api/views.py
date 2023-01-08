from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *

# Create your views here.

@api_view(['GET'])
def getProjects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProject(request, pk):
    project = Project.objects.get(id=pk)
    serializer = ProjectSerializer(project, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getContacts(request):
    contacts = Contact.objects.all()
    serializer = ContactSerializer(contacts, many=True)
    return Response(serializer.data)

    
@api_view(['POST'])
def createContact(request):
    data = request.data
    contact = Contact.objects.create(
        fName = data['fName'],
        lName= data['lName'],
        telephone= data['telephone'],
        email= data['email']
    )
    serializer = ContactSerializer(contact, many=False)
    return Response(serializer.data)