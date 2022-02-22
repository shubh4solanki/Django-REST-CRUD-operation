from django.db import models


class UserData(models.Model):
    user_name = models.CharField(max_length=200)
    first_name = models.CharField(max_length=200, blank=True, default='', null=True)
    last_name = models.CharField(max_length=200,blank=True, default='', null=True)
    email = models.EmailField(max_length=200, blank=True, null=True)
    phone_number = models.CharField(max_length=10, blank=True, default='', null=True)
