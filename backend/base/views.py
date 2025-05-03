from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, ApplicationSerializer, ApplicationSubmissionSerializer, AdminApplicationSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Application

import logging
logger = logging.getLogger(__name__)

# Create your views here.
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
    
class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    pagination_class = None  # Add pagination if needed

    permission_classes_by_action = {
        'create': [permissions.AllowAny],
        'approve': [permissions.IsAdminUser],
        'reject': [permissions.IsAdminUser],
        'default': [permissions.IsAuthenticated]
    }
    
    def get_permissions(self):
        return [permission() for permission in self.permission_classes_by_action.get(self.action, self.permission_classes_by_action['default'])]

    def get_serializer_class(self):
        if self.action == 'create':
            return ApplicationSubmissionSerializer
        elif self.request.user.is_staff: # Example: Check if the user is an admin
            return AdminApplicationSerializer
        return ApplicationSerializer
    
    def get_queryset(self):
        if self.request.user.is_staff:
            return Application.objects.all()
        return Application.objects.filter(email=self.request.user.email)

    def perform_create(self, serializer):
        serializer.save(status='pending') # You might want to add more logic here, e.g., sending a confirmation email

    def update_status(self, application, new_status):
        if application.status == 'pending':
            application.status = new_status
            application.save()
            return Response({'message': f'Application {new_status}.'}, status=status.HTTP_200_OK)
        return Response({'error': f'Cannot {new_status} application with current status.'}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAdminUser])
    def approve(self, request, pk=None):
        try:
            application = self.get_object()
            return self.update_status(application, 'approved')
        except Application.DoesNotExist:
            return Response({'error': 'Application not found.'}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=True, methods=['post'], permission_classes=[permissions.IsAdminUser])
    def reject(self, request, pk=None):
        try:
            application = self.get_object()
            return self.update_status(application, 'rejected')
        except Application.DoesNotExist:
            return Response({'error': 'Application not found.'}, status=status.HTTP_404_NOT_FOUND)