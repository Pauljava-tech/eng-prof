from django.db import models
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator

# Create your models here.
class Application(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    middle_name = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add=True)
    
    SEX_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female')
    ]
    sex = models.CharField(max_length=10, choices=SEX_CHOICES, help_text='Choose')
    
    department = models.CharField(max_length=100)
    course_of_study = models.CharField(max_length=100)
    year_of_graduation = models.IntegerField()
    
    CLASS_OF_DEGREE_CHOICES = [
        ('first class honours', 'First Class Honours'),
        ('second class honours (upper division)', 'Second Class Honours (Upper Division)'),
        ('second class honours (lower division)', 'Second Class Honours (Lower Division)'),
        ('third class honours', 'Third Class Honours'),
        ('pass', 'Pass')
    ]
    class_of_degree = models.CharField(choices=CLASS_OF_DEGREE_CHOICES, help_text='Choose')
    
    degree_awarded = models.CharField(max_length=20)
    
    MODE_OF_COLLECTION_CHOICES = [
        ('email', 'Email'),
        ('hand collection', 'Hand Collection')
    ]
    
    recipient_address = models.TextField()
    remita_reference_number = models.CharField(max_length=12)
    
    certificate_upload = models.FileField(
        upload_to='certificates/',
        validators=[FileExtensionValidator(['pdf'])],
        help_text='Upload original scanned copy in PDF format.'
    )
    
    remita_reciept = models.FileField(
        upload_to='remita/',
        validators=[FileExtensionValidator(['pdf'])],
        help_text='Upload in PDF format.'
    )
    
    def __str__(self):
        return self.first_name + self.last_name
    
    