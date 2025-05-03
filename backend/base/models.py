from django.db import models
from django.contrib.auth.models import User
from django.core.validators import FileExtensionValidator, MinValueValidator, MaxValueValidator
import datetime

# Create your models here.
class Application(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    middle_name = models.CharField(max_length=40, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    SEX_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female')
    ]
    sex = models.CharField(max_length=10, choices=SEX_CHOICES, help_text='Choose')
    email = models.EmailField()
    matric_number = models.CharField(max_length=20)
    
    department = models.CharField(max_length=100)
    course_of_study = models.CharField(max_length=100)
    year_of_graduation = models.IntegerField(
        validators=[
            MinValueValidator(1900),
            MaxValueValidator(datetime.datetime.now().year)
        ]
    )
    
    CLASS_OF_DEGREE_CHOICES = [
        ('first class honours', 'First Class Honours'),
        ('second class honours (upper division)', 'Second Class Honours (Upper Division)'),
        ('second class honours (lower division)', 'Second Class Honours (Lower Division)'),
        ('third class honours', 'Third Class Honours'),
        ('pass', 'Pass')
    ]
    class_of_degree = models.CharField(
        max_length=50,
        choices=CLASS_OF_DEGREE_CHOICES,
        help_text='Choose'
    )
    
    degree_awarded = models.CharField(max_length=20)
    
    MODE_OF_COLLECTION_CHOICES = [
        ('email', 'Email'),
        ('hand collection', 'Hand Collection')
    ]
    mode_of_collection = models.CharField(
        max_length=20,
        choices=MODE_OF_COLLECTION_CHOICES,
        default='email',
        help_text='Select mode of collection'
    )
    
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected')
    ]
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='pending',
        help_text='Application status (admin only)'
    )
    
    recipient_address = models.TextField()
    remita_reference_number = models.CharField(max_length=12)
    
    def certificate_upload_path(instance, filename):
        return f"certificates/{instance.first_name}_{instance.last_name}/{filename}"
    
    certificate_upload = models.FileField(
        upload_to='certificates/',
        validators=[FileExtensionValidator(['pdf'])],
        help_text='Upload original scanned copy in PDF format.'
    )
    
    def remita_receipt_upload_path(instance, filename):
        return f"remita/{instance.first_name}_{instance.last_name}/{filename}"
    
    remita_receipt = models.FileField(
        upload_to='remita/',
        validators=[FileExtensionValidator(['pdf'])],
        help_text='Upload in PDF format.'
    )
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"