from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Application

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {'password': {"write_only": True}}
        
    def create(self, validated_data):
         user = User.objects.create_user(**validated_data)
         return user
     

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        exclude = ['status']  
        
class ApplicationSubmissionSerializer(serializers.ModelSerializer):
    certificate = serializers.FileField(max_length=None, use_url=False)
    receipt = serializers.FileField(max_length=None, use_url=False)

    class Meta:
        model = Application
        fields = '__all__'

class AdminApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'

    def validate_status(self, value):
        if value not in ['pending', 'approved', 'rejected']:
            raise serializers.ValidationError("Invalid status value.")
        return value