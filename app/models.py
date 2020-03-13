from django.db import models

# Create your models here.

class Date_Convert(models.Model):
    standard_date = models.datetimefield(default=timezone.now)

class Unit_Convert(models.Model):
    standard_length = models.IntegerField(default=0)
    standard_weight = models.IntegerField(default=0)
    standard_volume = models.IntegerField(default=0)
