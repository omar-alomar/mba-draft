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


@api_view(['POST'])
def createProject(request):
    data = request.data
    project = Project.objects.create(
        name = data['name'],
        mbaNo = data['mbaNo'],
        coFileNo = data['coFileNo'],
        ded = data['ded'],
        dld = data['dld'],
        manager = data['manager'],
        comments = data['comments'],
        apfo = data['apfo'],
        status = data['status']
    )
    serializer = ProjectSerializer(project, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateComment(request, pk):
    data = request.data
    project = Project.objects.get(id=pk)
    serializer = ProjectSerializer(instance=project, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['PUT'])
def editProject(request, pk):
    data = request.data
    project = Project.objects.get(id=pk)
    serializer = ProjectSerializer(instance=project, data=data)

    if serializer.is_valid():
        serializer.save()
        print(serializer.errors)
    else:
        print(serializer.errors)
    
    return Response(serializer.data)


# Contact views
@api_view(['PUT'])
def editContact(request, pk):
    data = request.data
    contact = Contact.objects.get(id=pk)
    serializer = ContactSerializer(instance=contact, data=data)

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteContact(request, pk):
    contact = Contact.objects.get(id=pk)
    contact.delete()
    return Response('Contact deleted')

@api_view(['DELETE'])
def deleteProject(request, pk):
    project = Project.objects.get(id=pk)
    project.delete()
    return Response('Project deleted')