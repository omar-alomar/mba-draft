from rest_framework.serializers import ModelSerializer
from .models import *

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class AnnouncementSerializer(ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'
        
class LinkSerializer(ModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'